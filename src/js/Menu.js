import Ui from "./Ui";

export default class Menu extends Ui {
  menu = this.getElement(this.UiSelectors.nav);
  offsetHeight = this.menu.offsetHeight;
  scrollHeight = this.window.pageYOffset / 2;

  getHeight() {
    this.offsetHeight = this.menu.offsetHeight;
  }

  getActualScrollHeight() {
    document.body.onscroll = () => {
      console.log(this.scrollHeight);
    };
  }

  init() {
    this.getActualScrollHeight();
    this.getHeight();
  }
}
