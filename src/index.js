import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";

import Menu from "./js/Menu";
import Theme from "./js/Theme";
import Card from "./js/Card";
import Skills from "./js/Skills";
import Animations from "./js/Animations";

class App {
  #menu = new Menu();
  #animation = new Animations();
  #theme = new Theme();
  #card = new Card();
  #skills = new Skills();

  init() {
    this.#card.init();
    this.#menu.init();
    this.#skills.init();
    this.#animation.init();
    this.#theme.init();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
