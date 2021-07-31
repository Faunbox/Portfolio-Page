import "./sass/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Ui from "./js/Ui";

class App extends Ui {
  #hamburger = null;
  nav = null;

  handleElements() {
    this.#hamburger = this.getElement(this.UiSelectors.hamburger);
    this.nav = this.getElement(this.UiSelectors.nav);
  }

  addEventListeners() {
    this.#hamburger.addEventListener("click", () =>
      this.nav.classList.toggle("menu__active")
    );
  }

  init() {
    this.handleElements();
    this.addEventListeners();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
