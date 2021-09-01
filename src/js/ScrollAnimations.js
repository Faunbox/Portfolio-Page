import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class ScrollAnimations extends Ui {
  #introPage = [...this.getElement(this.UiSelectors.intro).children];
  #aboutSection = [...this.getElement(this.UiSelectors.about).children];
  #contactPage = [...this.getElement(this.UiSelectors.contact).children];

  #skills = [...this.getElement(this.UiSelectors.skills).children];
  #projectHeader = this.getElement(this.UiSelectors.projectHeader);
  #allElementsToScrollTrigger = [
    this.#aboutSection,
    this.#contactPage,
    this.#skills[0],
    this.#projectHeader,
  ];

  #projectSection = this.getElement(this.UiSelectors.projects);

  #skillsSection = this.getElement(this.UiSelectors.skills);
  #skillsElementsImg = this.getElements(this.UiSelectors.skillsImg);
  #allMultipleObject = [
    {
      trigger: this.#skillsSection,
      elemets: this.#skillsElementsImg,
    },
    {
      trigger: this.#projectSection,
      elemets: this.getElement(this.UiSelectors.projectsWrapper).children,
    },
  ];

  #animationPageOnPageLoad() {
    gsap.fromTo(
      this.#introPage,
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

  #showContentOnScroll(element) {
    gsap.fromTo(
      element,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: () => `top center+=20%`,
          end: () => `top center+=20%`,
          toggleActions: "play none reverse none",
        },
      }
    );
  }

  #animateMultipleElemtsWithScrollTrigger = (elements, trigger) => {
    gsap.fromTo(
      elements,
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
    this.#allElementsToScrollTrigger.forEach((element) => {
      this.#showContentOnScroll(element);
      this.#allMultipleObject.forEach((element) => {
        this.#animateMultipleElemtsWithScrollTrigger(
          element.elemets,
          element.trigger
        );
      });
    });
  }

  init() {
    this.#animationPageOnPageLoad();
  }
}
