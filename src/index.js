import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "./sass/index.scss";
import Ui from "./js/Ui";
import Menu from "./js/Menu";
import Theme from "./js/Theme";
import Card from "./js/Card";
import Skills from "./js/Skills";
import ScrollAnimations from "./js/ScrollAnimations";

class App extends Ui {
  #hamburger = null;
  #nav = null;

  #menu = new Menu();
  #Animation = new ScrollAnimations();
  #theme = new Theme();
  #card = new Card();
  #skills = new Skills();

  #handleElements() {
    this.#hamburger = this.getElement(this.UiSelectors.hamburger);
    this.#nav = this.getElement(this.UiSelectors.nav);
  }

  #toggleMenuActiveClass() {
    this.#nav.classList.toggle("menu__active");
  }

  #addEventListeners() {
    this.#hamburger.addEventListener("click", () =>
      this.#toggleMenuActiveClass()
    );
    this.#theme.init();
  }

  init() {
    this.#handleElements();
    this.#card.getData();
    this.#addEventListeners();
    this.#menu.handleMenuElement();
    this.#Animation.init();
    this.#skills.init();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
