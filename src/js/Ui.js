export default class Ui {
  UiSelectors = {
    nav: ".menu",
    menuElements: ".menu__list-element-link",
    main: ".app",
    hamburger: ".menu__hamburger",
    intro: ".intro-page",
    skills: ".skills",
    skillsImg: ".skills__image",
    about: ".about__wrapper",
    projects: ".projects",
    background: ".background",
    contact: '.contact',
    footer: ".footer",
    themeSwitcher: ".form-check",
    accordeon: ".accordion-item",
    accordionButtons: ".accordion-button",
    template: "#projects__template",
    bootstrapBtns: "btn",
  };

  getElement(element) {
    return document.querySelector(element);
  }

  getElements(elements) {
    return document.querySelectorAll(elements);
  }
}
