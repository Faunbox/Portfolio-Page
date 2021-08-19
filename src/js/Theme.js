import Ui from "./Ui";

export default class Theme extends Ui {
  background = this.getElement(this.UiSelectors.background);
  footer = this.getElement(this.UiSelectors.footer);
  nav = this.getElement(this.UiSelectors.nav);
  hamburger = this.getElement(this.UiSelectors.hamburger);
  themeSwitcher = this.getElement(this.UiSelectors.themeSwitcher);
  main = this.getElement(this.UiSelectors.main);
  bootstrapButton = this.getElement(this.UiSelectors.bootstrapBtn);

  #className = "--dark";

  handleSwitchTheme() {
    const accordeonsItems = this.getElements(this.UiSelectors.accordeon);
    const accordeonsButtons = this.getElements(
      this.UiSelectors.accordionButtons
    );

    this.background.classList.toggle(this.#className);
    this.footer.classList.toggle(this.#className);
    this.nav.classList.toggle(this.#className);
    this.hamburger.classList.toggle(this.#className);
    this.main.classList.toggle(this.#className);
    this.bootstrapButton.classList.toggle("btn-secondary");

    accordeonsItems.forEach((element) =>
      element.classList.toggle(this.#className)
    );
    accordeonsButtons.forEach((element) =>
      element.classList.toggle(this.#className)
    );
  }

  init() {
    this.themeSwitcher.addEventListener("click", () => {
      this.handleSwitchTheme();
      this.nav.classList.remove("menu__active");
    });
  }
}
