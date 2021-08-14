import Ui from "./Ui";
import { db } from "../../config/firebaseConfig";

export default class Card extends Ui {
  #template = this.getElement(this.UiSelectors.template);

  #db = db;
  #collection = "fl_content";
  #docRef = this.#db.collection(this.#collection).get();

  getData = () => {
    this.#docRef
      .then((snapshot) =>
        snapshot.forEach((doc) => this.#appendDataToTemplate(doc.data()))
      )
      .catch((error) => {return console.error("Whoops!" + error)});
  };

  handleOnClick = () => {};

  #appendDataToTemplate = (data) => {
    const {
      tytulProjektu,
      opisProjektu,
      linkDoAplikacji,
      linkDoProjektuNaGithubie,
      id
    } = data;

    const projectSection = this.getElement(this.UiSelectors.projects);
    const clone = this.#template.content.cloneNode(true);
    const accordionDiv = clone.querySelector(".accordion-collapse");
    const accordionHeader = clone.querySelector(".accordion-body");
    const accordionBody = clone.querySelector(".accordion-body");
    const accordionButton = clone.querySelector(".accordion-button");
    const accordionGit = clone.querySelector("#git");
    const accordionDemo = clone.querySelector("#demo");

    accordionButton.innerText = tytulProjektu;
    accordionButton.setAttribute("data-bs-target", `#${id}`);
    accordionDiv.setAttribute("id", `${id}`);
    accordionHeader.innerText = tytulProjektu;
    accordionBody.innerText = opisProjektu;
    accordionGit.setAttribute("href", linkDoProjektuNaGithubie);
    accordionDemo.setAttribute("href", linkDoAplikacji);

    projectSection.appendChild(clone);
  };
}
