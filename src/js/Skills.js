import Ui from "./Ui";
import Animation from "./Animations";

export default class Skills extends Ui {
  skillsArray = this.getElements(this.UiSelectors.skillsImg);
  animation = new Animation();
  isActive = false;


  #setAnimation() {
    return this.animation.elementBouncing(this.skillsArray[3]);
  }

  #handleOnClick = () => {
    this.skillsArray.forEach((element) => {
      element.addEventListener("click", () => {
        this.animation.animateOnClick(element);
      });
    });
  };

  init() {
    this.#handleOnClick();
    this.#setAnimation();
  }
}
