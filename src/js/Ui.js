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
    skillsDiv: ".skills__element",
    skillsImg: ".skills__image",
    //projects
    projects: ".projects",
    card: ".card",
    projectsWrapper: ".projects__projects",
    projectHeader: ".projects__header",
    template: "#projects__template",
    //contact and footer
    contact: ".contact",
    footer: ".footer",
    footerContent: ".footer__content",
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
