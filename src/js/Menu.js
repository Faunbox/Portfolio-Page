import Ui from "./Ui";

export default class Menu extends Ui {
  menuElements = [...this.getElements(this.UiSelectors.menuElements)];
  mainElement = [...this.getElement(this.UiSelectors.main).children];
  menu = this.getElement(this.UiSelectors.nav);

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
