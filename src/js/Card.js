import Ui from "./Ui";
import Animate from "./ScrollAnimations";
import { db } from "../../config/firebaseConfig";
import gsap from "gsap";

export default class Card extends Ui {
  #template = this.getElement(this.UiSelectors.template);

  #db = db;
  #collection = "fl_content";
  #docRef = this.#db.collection(this.#collection).get();
  #gsapFirstMountFlag = false;
  #animate = new Animate();

  getData = async () => {
    await this.#docRef
      .then((snapshot) => {
        snapshot.forEach((doc) => this.#appendDataToTemplate(doc.data()));

        this.#animate.useAnimationOnBodyElements();
      })
      .catch((error) => {
        return console.error(
          "Whoops! There is some error while fetching data!! => " + error
        );
      });
  };

  #appendDataToTemplate = (data) => {
    const {
      tytulProjektu,
      opisProjektu,
      linkDoAplikacji,
      linkDoProjektuNaGithubie,
    } = data;

    const projectSection = this.getElement(this.UiSelectors.projects);
    const clone = this.#template.content.cloneNode(true);
    const cardHeader = clone.querySelector(".card-header");
    // const cardImage = clone.querySelector(".card-image");
    // const cardTitle = clone.querySelector(".card-title");
    const cardtext = clone.querySelector(".card-text");
    const cardGitButton = clone.querySelector("#git");
    const cardDemoButton = clone.querySelector("#demo");

    //prevent adding animation to all template element
    if (!this.#gsapFirstMountFlag) {
      this.#animate.animateOnScroll(projectSection);
    }

    cardHeader.innerText = tytulProjektu;
    cardtext.innerText = opisProjektu;
    cardGitButton.setAttribute("href", linkDoProjektuNaGithubie);
    cardDemoButton.setAttribute("href", linkDoAplikacji);

    projectSection.appendChild(clone);
    this.#gsapFirstMountFlag = true;
  };
}
