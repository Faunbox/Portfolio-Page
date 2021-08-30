import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class Skills extends Ui {
  #animateOnClick = (element) => {
    gsap
      .to(element, {
        rotation: 360,
        duration: 0.5,
        transformStyle: "preserve-3d",
      })
      .then(gsap.to(element, { rotation: 0, duration: 1, delay: 0.5 }));
  };

  #handleOnClick = () => {
    this.getElements(this.UiSelectors.skillsImg).forEach((element) => {
      element.addEventListener("click", () => this.#animateOnClick(element));
    });
  };

  init() {
    // this.#animateOnScrollTrigger();
    this.#handleOnClick();
  }
}
