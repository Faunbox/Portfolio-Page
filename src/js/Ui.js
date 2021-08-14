export default class Ui {
  UiSelectors = {
    nav: ".menu",
    menuElements: ".menu__list-element-link",
    main: ".app",
    hamburger: ".menu__hamburger",
    skills: ".skills",
    about: ".about",
    projects: ".projects",
    background: ".background",
    footer: ".footer",
    themeSwitcher: ".form-check",
    accordeon: ".accordion-item",
    accordionButtons: ".accordion-button",
    template: "#projects__template"
  };

  getElement(element) {
    return document.querySelector(element);
  }

  getElements(elements) {
    return document.querySelectorAll(elements);
  }
}
