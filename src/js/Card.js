import Ui from "./Ui";
import { db } from "../../config/firebaseConfig";

export default class Card extends Ui {
  template = this.getElement(this.UiSelectors.template);

  db = db;
  collection = "fl_content";
  data = [];
  docRef = this.db.collection(this.collection).get();

  getData() {
    this.docRef
      .then((snapshot) => snapshot.forEach((doc) => this.data.push(doc.data())))
      .then(console.log(this.data))
      .catch((error) => console.error("Whoops!" + error));
  }

  appendDataToTemplate() {
    const project = this.getElement(this.UiSelectors.projects);
    const clone = this.template.content.cloneNode(true);
    const accordionButton = clone.querySelector(".accordion-button")
    const accordionBody = clone.querySelector(".accordion-body")
    const accordionGit = clone.querySelector("#git")
    const accordionDemo = clone.querySelector("#demo")
    
    
    console.log(accordionBody, accordionButton, accordionDemo, accordionGit);
  }

  init() {
    this.getData();
    this.appendDataToTemplate();
  }
}
