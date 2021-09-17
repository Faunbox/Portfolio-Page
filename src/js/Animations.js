import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class Animations extends Ui {
  #menu = this.getElement(this.UiSelectors.nav);
  #hamburger = this.getElement(this.UiSelectors.hamburger);

  #introPage = [...this.getElement(this.UiSelectors.intro).children];

  #aboutSection = this.getElement(this.UiSelectors.about);
  #aboutSectionChildren = [...this.getElement(this.UiSelectors.about).children];

  #contactPage = this.getElement(this.UiSelectors.contact);
  #contactPageChildren = [
    ...this.getElement(this.UiSelectors.contact).children,
  ];

  #skills = this.getElement(this.UiSelectors.skills);
  #skillsChildren = [...this.getElement(this.UiSelectors.skills).children];

  #projects = this.getElement(this.UiSelectors.projects);
  #projectsChildren = [...this.getElement(this.UiSelectors.projects).children];

  #allElementsToScrollTrigger = [
    {
      elements: this.#aboutSectionChildren,
      trigger: this.#aboutSection,
    },
    {
      elements: this.#contactPageChildren,
      trigger: this.#contactPage,
    },
    {
      elements: this.#skillsChildren,
      trigger: this.#skills,
    },
    {
      elements: this.#projectsChildren,
      trigger: this.#projects,
    },
  ];

  #skillsSection = this.getElement(this.UiSelectors.skills).children;
  #skillsElementsImg = this.getElements(this.UiSelectors.skillsImg);

  #allMultipleObject = [
    {
      element: this.#skillsElementsImg,
      trigger: this.#skillsSection,
    },
  ];

  //skills section on click flag
  #flag = false;
  //menu flag
  #isMenuActive = false;

  //Animation on page load
  #animationPageOnPageLoad() {
    gsap.fromTo(
      [this.#introPage, this.#menu, this.#hamburger],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 1,
        stagger: 0.3,
      }
    );
  }

  //Menu animations
  menuAnimationOnPageLoad(menuElement) {
    if (window.innerWidth >= 1024) {
      gsap.fromTo(menuElement, { scale: 0 }, { scale: 1.0, opacity: 1 });
    }
  }

  toggleMenuActive(menu, menuElements, themeSwitcher) {
    const menuWidth = menu.offsetWidth;
    const tl = gsap.timeline();
    const animation = tl
      .fromTo(
        menu,
        { x: -menuWidth, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        menuElements,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1 }
      );

    if (this.#isMenuActive && window.innerWidth < 1024) {
      this.#isMenuActive = false;
      themeSwitcher.style.display = "none";

      return this.rotateMenuOnClick().reverse(0), animation.reverse(0);
    }
    this.#isMenuActive = true;
    themeSwitcher.style.display = "block";

    this.rotateMenuOnClick().play();
    return animation.play();
  }

  rotateMenuOnClick() {
    const animation = gsap.fromTo(
      this.#hamburger,

      {
        rotate: 0,
      },
      { rotate: 90, duration: 0.5 }
    );
    return animation;
  }

  menuAnimationOnResize(menuSwitcher, menu, menuElements) {
    if (window.innerWidth >= 1024) {
      menuSwitcher.style.display = "none";

      gsap
        .set(menu, { x: 0, opacity: 1 })
        .then(gsap.set(menuElements, { scale: 1, opacity: 1 }));
    } else gsap.set(menu, { x: -menu.offsetWidth });
    if (this.#isMenuActive && window.innerWidth >= 1024) {
      menuSwitcher.style.display = "block";
      return this.animation.rotateMenuOnClick().reverse(0);
    }
  }

  //Projects animation
  animateOnClick = (element) => {
    if (!this.#flag) {
      gsap
        .to(element, {
          rotation: 360,
          duration: 0.5,
          transformStyle: "preserve-3d",
          onStart: () => (this.#flag = true),
        })
        .then(
          gsap.to(element, {
            rotation: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => (this.#flag = false),
          })
        );
    }
  };

  elementBouncing(element) {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 6, delay: 3 });
    const animation = tl
      .to(element, { x: 10 })
      .to(element, { x: -10 })
      .to(element, { x: 6 })
      .to(element, { x: -6 })
      .to(element, { x: 3 })
      .to(element, { x: 0 });

    element.addEventListener("click", () => animation.kill());

    return animation.duration(1);
  }

  // Scroll Triggers
  #showContentOnScroll(elements, trigger) {
    gsap.fromTo(
      elements,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: trigger,
          start: () => `top center+=20%`,
          end: () => `top center+=20%`,
          toggleActions: "play none reverse none",
        },
      }
    );
  }

  #animateMultipleElemtsWithScrollTrigger = (element, trigger) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scale: 1.0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: trigger,
          start: () => `top center+=20%`,
          end: () => `top center+=20%`,
          toggleActions: "play none reverse none",
        },
      }
    );
  };

  useAnimationOnBodyElements() {
    this.#allMultipleObject.forEach(({ trigger, element }) => {
      this.#animateMultipleElemtsWithScrollTrigger(element, trigger);
    });
    this.#allElementsToScrollTrigger.forEach(({ elements, trigger }) => {
      this.#showContentOnScroll(elements, trigger);
    });
  }

  init() {
    this.#animationPageOnPageLoad();
  }
}
