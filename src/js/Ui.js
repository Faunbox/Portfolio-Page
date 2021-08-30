export default class Ui {
  UiSelectors = {
    //menu
    nav: ".menu",
    menuElements: ".menu__list-element-link",
    hamburger: ".menu__hamburger",
    switchOffMenu: ".menu__exit",
    //bgc, main
    background: ".background",
    main: ".app",
    //content page and about
    intro: ".intro-page",
    about: ".about__wrapper",
    //skills
    skills: ".skills",
    skillsImg: ".skills__image",
    //projects
    projects: ".projects",
    card: ".card",
    template: "#projects__template",
    //contact and footer
    contact: ".contact",
    footer: ".footer",
    //bootstrap
    themeSwitcher: ".form-check",
    bootstrapBtn: ".btn",
  };

  getElement(element) {
    return document.querySelector(element);
  }

  getElements(elements) {
    return document.querySelectorAll(elements);
  }
}
