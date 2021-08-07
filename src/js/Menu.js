import Ui from "./Ui";

export default class Menu extends Ui {
  menuElements = [...this.getElements(this.UiSelectors.menuElements)];
  mainElement = [...this.getElement(this.UiSelectors.main).children];
  offsetHeight = null;
  scrollHeight = null;
  actualOffsetTopValues = [];

  getActualScrollHeight() {
    document.body.onscroll = () => {
      if (window.pageYOffset >= window.innerHeight / 2) {
        return (this.scrollHeight = window.pageYOffset / 2);
      }
    };
  }

  getActualOffsetOfMenuElements() {
    this.actualOffsetTopValues = []
    this.mainElement.forEach((element) => {
      const elemntHeight = element.offsetTop;
      this.actualOffsetTopValues.push(elemntHeight);
    });
    this.actualOffsetTopValues.shift();
  }

  addClassToActiveElement = () => {};
}
