import Ui from "./Ui";

export default class Theme extends Ui {
  background = this.getElement(this.UiSelectors.background);
  footer = this.getElement(this.UiSelectors.footer);
  nav = this.getElement(this.UiSelectors.nav);
  hamburger = this.getElement(this.UiSelectors.hamburger);
  themeSwitcher = this.getElement(this.UiSelectors.themeSwitcher);
  main = this.getElement(this.UiSelectors.main);

  #className = "--dark";

  handleSwitchTheme() {
    const bootstrapButton = this.getElements(this.UiSelectors.bootstrapBtn);
    const cards = this.getElements(this.UiSelectors.card);
    const projectsElement = [...cards];

    this.background.classList.toggle(this.#className);
    this.footer.classList.toggle(this.#className);
    this.nav.classList.toggle(this.#className);
    this.hamburger.classList.toggle(this.#className);
    this.main.classList.toggle(this.#className);
    bootstrapButton.forEach((element) => {
      element.classList.toggle("btn-light");
      element.classList.toggle("btn-secondary");
    });

    projectsElement.forEach((element) => {
      element.classList.toggle(this.#className);
      [...element.children].forEach((elem) =>
        elem.classList.toggle(this.#className)
      );
    });
  }

  init() {
    this.themeSwitcher.addEventListener("click", () => {
      this.handleSwitchTheme();
    });
  }
}
