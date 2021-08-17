import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class ScrollAnimations extends Ui {
  menu = this.getElement(this.UiSelectors.nav);
  introPage = [...this.getElement(this.UiSelectors.intro).children];
  aboutSection = [...this.getElement(this.UiSelectors.about).children];
  contactPage = [...this.getElement(this.UiSelectors.contact).children];
  skills = [...this.getElement(this.UiSelectors.skills).children];

  allElementsToScrollTrigger = [
    this.aboutSection,
    this.contactPage,
    this.skills[0],
  ];
  allElementsToAnimateOnFirstPageLoad = [this.introPage, this.menu];

  animationPageOnPageLoad(element) {
    gsap.set(element, { opacity: 0, scale: 0 });
    gsap.to(element, {
      opacity: 1,
      scale: 1.0,
      duration: 1.5,
      delay: 1,
      stagger: 0.5,
    });
  }

  showTextOnScrolling(element) {
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
          start: "bottom-=20% center+=20%",
          end: "bottom-=20% center+=20%",
          toggleActions: "play none reverse none",
        },
      }
    );
  }

  useAnimationOnBodyElements() {
    this.allElementsToScrollTrigger.forEach((element) =>
      this.showTextOnScrolling(element)
    );
    this.allElementsToAnimateOnFirstPageLoad.forEach((element) =>
      this.animationPageOnPageLoad(element)
    );
  }

  init() {
    this.animationPageOnPageLoad();
    this.useAnimationOnBodyElements();
  }
}
