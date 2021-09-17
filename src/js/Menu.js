import Ui from "./Ui";
import Animations from "./Animations";

export default class Menu extends Ui {
  menuElements = [
    ...this.getElements(this.UiSelectors.menuElements),
    this.getElement(this.UiSelectors.themeSwitcher),
  ];
  mainElement = [...this.getElement(this.UiSelectors.main).children];
  menu = this.getElement(this.UiSelectors.nav);
  hamburger = this.getElement(this.UiSelectors.hamburger);
  menuSwitcher = this.getElement(this.UiSelectors.switchOffMenu);
  animation = new Animations();
  #toggleMenuActiveAnimation() {
    return this.animation.toggleMenuActive(
      this.menu,
      this.menuElements,
      this.menuSwitcher
    );
  }
  #addEventListeners() {
    this.hamburger.addEventListener("click", () => {
      this.#toggleMenuActiveAnimation();
    });
    ["click", "touchstart"].forEach((event) =>
      this.menuSwitcher.addEventListener(
        event,
        () => this.#toggleMenuActiveAnimation()
      )
    );
    //responsive menu display after open on mobile and resize to big screen
    window.addEventListener("resize", () => {
      this.animation.menuAnimationOnResize(
        this.menuSwitcher,
        this.menu,
        this.menuElements
      );
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
        this.#toggleMenuActiveAnimation();
      }
    });
  }

  #handleMenuElement() {
    this.mainElement.shift();
    for (let i = 0; i <= this.mainElement.length - 1; i++) {
      this.#handleScrollToElemenet(this.menuElements[i], this.mainElement[i]);
    }
  }

  init() {
    this.#addEventListeners();
    this.#handleMenuElement();
  }
}
