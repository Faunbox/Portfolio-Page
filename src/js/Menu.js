import Ui from "./Ui";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Menu extends Ui {
  menuElements = [...this.getElements(this.UiSelectors.menuElements)];
  mainElement = [...this.getElement(this.UiSelectors.main).children];

  gsapAnimation(element, trigger) {
    gsap.fromTo(
      element,
      { borderBottom: "none" },
      {
        duration: 0.1,
        borderBottom: "1px solid black",
        scrollTrigger: {
          trigger: trigger,
          id: trigger,
          start: "center center",
          endTrigger: "bottom bottom",
          markers: true,
          toggleActions: "play reset play reset",
        },
      }
    );
  }

  handleScrollToElemenet(menuElement, element) {
    console.log(menuElement + " " + element);
    menuElement.addEventListener("click", (e) => {
      e.preventDefault();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  handleMenuElement() {
    this.mainElement.shift();
    for (let i = 0; i <= this.mainElement.length - 1; i++) {
      // this.gsapAnimation(this.menuElements[i], this.mainElement[i]);
      this.handleScrollToElemenet(this.menuElements[i], this.mainElement[i]);
    }
  }

  init() {
    this.handleMenuElement();
  }
}
