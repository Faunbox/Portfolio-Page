import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import 'bootstrap/js/dist/collapse'
import Ui from "./js/Ui";
import Menu from "./js/Menu";
import Theme from "./js/Theme";
import Card from "./js/Card";

class App extends Ui {
  #hamburger = null;
  nav = null;
  about = null;

  menu = new Menu();
  theme = new Theme();
  card = new Card();

  handleElements() {
    this.#hamburger = this.getElement(this.UiSelectors.hamburger);
    this.nav = this.getElement(this.UiSelectors.nav);
  }

  removeMenuActiveClass() {
    this.nav.classList.remove("menu__active");
  }

  addEventListeners() {
    this.#hamburger.addEventListener("click", () => {
      this.nav.classList.toggle("menu__active");
    });
    this.theme.init();
  }


  init() {
    this.handleElements();
    this.addEventListeners();
    this.menu.init();
    this.card.init();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
