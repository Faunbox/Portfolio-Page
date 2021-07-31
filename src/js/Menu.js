import Ui from "./Ui";

export default class Menu extends Ui {
  menu = this.getElement(this.UiSelectors.nav);
  offsetHeight = null;
  scrollHeight = null;

  getHeight() {
    this.offsetHeight = this.menu.offsetHeight;
  }

  getActualScrollHeight() {
    document.body.onscroll = () => {
      this.scrollHeight = window.pageYOffset / 2;
      console.log(this.scrollHeight);
    };
  }





  init() {
    this.getActualScrollHeight();
    this.getHeight();
  }
}
