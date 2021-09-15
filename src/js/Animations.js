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
