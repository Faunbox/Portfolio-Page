import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class Skills extends Ui {
  #skillsSection = this.getElement(this.UiSelectors.skills);
  #skillsElementsImg = this.getElements(this.UiSelectors.skillsImg);

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
          start: "center center",
          end: "center center",
          toggleActions: "play none reverse none",
        },
      }
    );
  };

  #animateOnClick = (element) => {
    gsap
      .to(element, {
        rotation: 360,
        duration: 0.5,
        transformStyle: "preserve-3d",
      })
      .then(gsap.to(element, { rotation: 0, duration: 1, delay: 0.5 }))
  };

  #handleOnClick = () => {
    this.#skillsElementsImg.forEach((element) => {
      element.addEventListener("click", () => this.#animateOnClick(element));
    });
  };

  init() {
    this.#animateOnScrollTrigger();
    this.#handleOnClick();
  }
}
