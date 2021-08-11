import Ui from "./Ui";

export default class Theme extends Ui {
  background = this.getElement(this.UiSelectors.background);
  footer = this.getElement(this.UiSelectors.footer);
  nav = this.getElement(this.UiSelectors.nav);
  hamburger = this.getElement(this.UiSelectors.hamburger);
  themeSwitcher = this.getElement(this.UiSelectors.themeSwitcher);
  main = this.getElement(this.UiSelectors.main);
  cards = this.getElements(this.UiSelectors.card);

  className = "--dark";

  handleSwitchTheme() {
    this.background.classList.toggle(this.className);
    this.footer.classList.toggle(this.className);
    this.nav.classList.toggle(this.className);
    this.hamburger.classList.toggle(this.className);
    this.main.classList.toggle(this.className);
    this.cards.forEach((card) => card.classList.toggle(this.className));
  }

  init() {
    this.themeSwitcher.addEventListener("click", () => {
      this.handleSwitchTheme();
      this.nav.classList.remove("menu__active");
    });
  }
}
