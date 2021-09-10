import Ui from "./Ui";
import Animate from "./ScrollAnimations";
import { db } from "../../config/firebaseConfig";

export default class Card extends Ui {
  #template = this.getElement(this.UiSelectors.template);

  #db = db;
  #collection = "fl_content";
  #docRef = this.#db.collection(this.#collection).get();
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

    const projectsWrapper = this.getElement(this.UiSelectors.projectsWrapper);
    const clone = this.#template.content.cloneNode(true);
    const cardHeader = clone.querySelector(".card-header");
    const cardtext = clone.querySelector(".card-text");
    const cardGitButton = clone.querySelector("#git");
    const cardDemoButton = clone.querySelector("#demo");

    cardHeader.innerText = tytulProjektu;
    cardtext.innerText = opisProjektu;
    cardGitButton.setAttribute("href", linkDoProjektuNaGithubie);
    cardDemoButton.setAttribute("href", linkDoAplikacji);
    

    projectsWrapper.appendChild(clone);
  };
}
