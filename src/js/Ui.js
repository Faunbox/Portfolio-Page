export default class Ui {
  UiSelectors = {
    nav: ".menu",
    menuElements: ".menu__list-element",
    main: ".app",
    hamburger: ".menu__hamburger",
    skills: ".skills",
    about: ".about",
  };

  getElement(element) {
    return document.querySelector(element);
  }

  getElements(elements) {
    return document.querySelectorAll(elements);
  }
}
