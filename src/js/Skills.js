import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ui from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default class Skills extends Ui {
  isActive = false;
  #animateOnClick = (element) => {
    if (!this.isActive) {
      gsap
        .to(element, {
          rotation: 360,
          duration: 0.5,
          transformStyle: "preserve-3d",
          onStart: () => (this.isActive = true),
        })
        .then(
          gsap.to(element, {
            rotation: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => (this.isActive = false),
          })
        );
    }
  };

  #handleOnClick = () => {
    this.getElements(this.UiSelectors.skillsImg).forEach((element) => {
      element.addEventListener("click", () => this.#animateOnClick(element));
    });
  };

  init() {
    this.#handleOnClick();
  }
}
