import gsap from "gsap/gsap-core";
import Ui from "./Ui";

export default class Menu extends Ui {
  menuElements = [
    ...this.getElements(this.UiSelectors.menuElements),
    this.getElement(this.UiSelectors.themeSwitcher),
  ];
  mainElement = [...this.getElement(this.UiSelectors.main).children];
  menu = this.getElement(this.UiSelectors.nav);
  hamburger = this.getElement(this.UiSelectors.hamburger);
  menuSwitcher = this.getElement(this.UiSelectors.switchOffMenu);
  isMenuActive = false;

  menuAnimationOnPageLoad() {
    if (window.innerWidth >= 1024) {
      gsap.fromTo(this.menu, { scale: 0 }, { scale: 1.0, opacity: 1 });
    }
  }

  #toggleMenuActive() {
    const menuWidth = this.menu.offsetWidth;
    const tl = gsap.timeline();
    const animation = tl
      .fromTo(
        this.menu,
        { x: -menuWidth, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        this.menuElements,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1 }
      );

    if (this.isMenuActive && window.innerWidth < 1024) {
      this.isMenuActive = false;
      this.menuSwitcher.style.display = "none";

      return animation.reverse(0);
    }
    this.isMenuActive = true;
    this.menuSwitcher.style.display = "block";
    return animation.play();
  }

  addEventListeners() {
    this.hamburger.addEventListener("click", () => this.#toggleMenuActive());
    this.menuSwitcher.addEventListener("click", () => this.#toggleMenuActive());

    //responsive menu display after open on mobile and resize to big screen
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        gsap
          .set(this.menu, { x: 0, opacity: 1 })
          .then(gsap.set(this.menuElements, { scale: 1, opacity: 1 }));
      } else gsap.set(this.menu, { x: -this.menu.offsetWidth });
    });
  }

  #handleScrollToElemenet(menuElement, element) {
    menuElement.addEventListener("click", (e) => {
      e.preventDefault();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (window.innerWidth <= 1024) {
        this.#toggleMenuActive();
      }
    });
  }

  handleMenuElement() {
    this.mainElement.shift();
    for (let i = 0; i <= this.mainElement.length - 1; i++) {
      this.#handleScrollToElemenet(this.menuElements[i], this.mainElement[i]);
    }
  }
}
