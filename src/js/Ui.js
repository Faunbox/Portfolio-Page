export default class Ui {
 UiSelectors = {
     nav: ".menu",
     hamburger: ".menu__hamburger"
 }

  getElement(element) {
   return document.querySelector(element)
  }

  getElements(elements) {
      return document.querySelectorAll(elements)
  }
}
