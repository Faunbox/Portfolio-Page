import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";

import firebase from "firebase";
import { firebaseConfig } from "../config/firebaseConfig";
import Ui from "./js/Ui";
import Menu from "./js/Menu";

class App extends Ui {
  #hamburger = null;
  nav = null;
  about = null;

  menu = new Menu();

  handleElements() {
    this.#hamburger = this.getElement(this.UiSelectors.hamburger);
    this.nav = this.getElement(this.UiSelectors.nav);
  }

  addEventListeners() {
    this.#hamburger.addEventListener("click", () => {
      this.nav.classList.toggle("menu__active");
    });
    document.body.onresize = () => {
      this.menu.getHeight();
    };
  }

  init() {
    firebase.initializeApp(firebaseConfig);
    this.handleElements();
    this.addEventListeners();
    this.menu.init();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
