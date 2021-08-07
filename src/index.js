import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";

import firebase from "firebase/app";
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
      const exitMenuDiv = document.createElement("div");
      exitMenuDiv.className = "menu__exit-menu";

      exitMenuDiv.addEventListener("click", () =>
        this.nav.classList.remove("menu__active")
      );
      this.nav.classList.toggle("menu__active");
    });
    document.body.onresize = () => {
      this.menu.getActualScrollHeight();
      this.menu.getActualOffsetOfMenuElements();
    };
  }

  init() {
    firebase.initializeApp(firebaseConfig);
    this.handleElements();
    this.addEventListeners();
    this.menu.getActualOffsetOfMenuElements();
  }
}

window.onload = () => {
  const app = new App();
  app.init();
};
