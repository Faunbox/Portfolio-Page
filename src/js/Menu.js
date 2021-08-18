import gsap from "gsap/gsap-core";
import Ui from "./Ui";

export default class Menu extends Ui {
  menuElements = [...this.getElements(this.UiSelectors.menuElements)];
  mainElement = [...this.getElement(this.UiSelectors.main).children];
  menu = this.getElement(this.UiSelectors.nav);
  hamburger = this.getElement(this.UiSelectors.hamburger);
  isMenuActive = false;

  #toggleMenuActive() {
    const menuWidth = this.menu.offsetWidth;
    const tl = gsap.timeline();
    const animation = tl
      .fromTo(
        this.menu,
        { x: -menuWidth, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(
        this.menuElements,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    if (this.isMenuActive) {
      this.isMenuActive = false;
      return animation.reverse(0);
    }
    this.isMenuActive = true;
    return animation.play();
  }

  addEventListeners() {
    this.hamburger.addEventListener("click", () => this.#toggleMenuActive());
  }

  #handleScrollToElemenet(menuElement, element) {
    menuElement.addEventListener("click", (e) => {
      e.preventDefault();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      this.menu.classList.remove("menu__active");
    });
  }

  handleMenuElement() {
    this.mainElement.shift();
    for (let i = 0; i <= this.mainElement.length - 1; i++) {
      this.#handleScrollToElemenet(this.menuElements[i], this.mainElement[i]);
    }
  }
}
