import gsap from "gsap";
import Ui from "./Ui";
import Animation from "./Animations";

export default class Skills extends Ui {
  skillsArray = this.getElements(this.UiSelectors.skillsImg);
  animation = new Animation();
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

  #setAnimation() {
    return this.animation.elementBouncing(this.skillsArray[3]);
  }

  #handleOnClick = () => {
    this.skillsArray.forEach((element) => {
      element.addEventListener("click", () => {
        this.#animateOnClick(element);
      });
    });
  };

  init() {
    this.#handleOnClick();
    this.#setAnimation();
  }
}
