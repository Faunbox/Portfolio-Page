import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "./sass/index.scss";
import Menu from "./js/Menu";
import Theme from "./js/Theme";
import Card from "./js/Card";
import Skills from "./js/Skills";
import ScrollAnimations from "./js/ScrollAnimations";

class App {
  #menu = new Menu();
  #Animation = new ScrollAnimations();
  #theme = new Theme();
  #card = new Card();
  #skills = new Skills();

  init() {
    this.#card.getData();
    this.#menu.addEventListeners();
    this.#menu.handleMenuElement();
    this.#Animation.init();
    this.#skills.init();
    this.#theme.init();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
