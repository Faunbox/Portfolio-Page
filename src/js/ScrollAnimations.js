import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class ScrollAnimations extends Ui {
  #introPage = [...this.getElement(this.UiSelectors.intro).children];
  #aboutSection = [...this.getElement(this.UiSelectors.about).children];
  #contactPage = [...this.getElement(this.UiSelectors.contact).children];
  #skills = [...this.getElement(this.UiSelectors.skills).children];
  #allElementsToScrollTrigger = [
    this.#aboutSection,
    this.#contactPage,
    this.#skills[0],
  ];
  #skillsSection = this.getElement(this.UiSelectors.skills);
  #skillsElementsImg = this.getElements(this.UiSelectors.skillsImg);

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

  #showTextOnScrolling(element) {
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

  animateOnScroll(element) {
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: () => `top center`,
          end: () => `top center`,
          toggleActions: "play none reverse none",
        },
      }
    );
  }

  #animateOnScrollTrigger = () => {
    gsap.fromTo(
      this.#skillsElementsImg,
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
          trigger: this.#skillsSection,
          start: () => `top center+=20%`,
          end: () => `top center+=20%`,
          toggleActions: "play none reverse none",
        },
      }
    );
  };

  useAnimationOnBodyElements() {
    this.#allElementsToScrollTrigger.forEach((element) => {
      this.#showTextOnScrolling(element);
      this.#animateOnScrollTrigger();
    });
  }

  init() {
    this.#animationPageOnPageLoad();
  }
}
