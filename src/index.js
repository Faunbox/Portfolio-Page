import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";

import firebase from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import Ui from "./js/Ui";
import Menu from "./js/Menu";
import Theme from "./js/Theme";

class App extends Ui {
  #hamburger = null;
  nav = null;
  about = null;

  menu = new Menu();
  theme = new Theme();

  handleElements() {
    this.#hamburger = this.getElement(this.UiSelectors.hamburger);
    this.nav = this.getElement(this.UiSelectors.nav);
  }

  addEventListeners() {
    this.#hamburger.addEventListener("click", () => {
      exitMenuDiv.addEventListener("click", () =>
        this.nav.classList.remove("menu__active")
      );
      this.nav.classList.toggle("menu__active");
    });
    this.theme.init();
  }

  init() {
    firebase.initializeApp(firebaseConfig);
    this.handleElements();
    this.addEventListeners();
    // this.menu.getActualOffsetOfMenuElements();
    this.menu.init();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
