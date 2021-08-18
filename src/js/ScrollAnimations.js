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

  animationPageOnPageLoad() {
    gsap.fromTo(
      this.introPage,
      { opacity: 0, scale: 0, y: -50 },
      {
        opacity: 1,
        scale: 1.0,
        y: 0,
        duration: 1.5,
        delay: 1,
        stagger: 0.5,
      }
    );
  }

  menuAnimationOnPageLoad() {
    if (window.innerWidth >= 1024) {
      gsap.fromTo(this.menu, { scale: 0 }, { scale: 1.0, opacity: 1 });
    }
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
  }

  init() {
    this.animationPageOnPageLoad();
    this.menuAnimationOnPageLoad();
    this.useAnimationOnBodyElements();
  }
}
