import Ui from "./Ui";
import { db } from "../../config/firebaseConfig";
import gsap from "gsap";

export default class Card extends Ui {
  #template = this.getElement(this.UiSelectors.template);

  #db = db;
  #collection = "fl_content";
  #docRef = this.#db.collection(this.#collection).get();
  #gsapFirstMountFlag = false;

  getData = () => {
    this.#docRef
      .then((snapshot) =>
        snapshot.forEach((doc) => this.#appendDataToTemplate(doc.data()))
      )
      .catch((error) => {
        return console.error("Whoops! There is some error! => " + error);
      });
  };

  #animateOnScroll(element) {
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: "bottom-=20% center+=20%",
          end: "bottom-=20% center+=20%",
          toggleActions: "play none reverse none",
        },
      }
    );
  }

  #appendDataToTemplate = (data) => {
    const {
      tytulProjektu,
      opisProjektu,
      linkDoAplikacji,
      linkDoProjektuNaGithubie,
      id,
    } = data;

    const projectSection = this.getElement(this.UiSelectors.projects);
    const clone = this.#template.content.cloneNode(true);
    const accordionDiv = clone.querySelector(".accordion-collapse");
    const accordionHeader = clone.querySelector(".accordion-body");
    const accordionBody = clone.querySelector(".accordion-body");
    const accordionButton = clone.querySelector(".accordion-button");
    const accordionGit = clone.querySelector("#git");
    const accordionDemo = clone.querySelector("#demo");

    //prevent adding animation to all template element
    if (!this.#gsapFirstMountFlag) {
      this.#animateOnScroll(projectSection);
    }

    accordionButton.innerText = tytulProjektu;
    accordionButton.setAttribute("data-bs-target", `#${id}`);
    accordionDiv.setAttribute("id", `${id}`);
    accordionHeader.innerText = tytulProjektu;
    accordionBody.innerText = opisProjektu;
    accordionGit.setAttribute("href", linkDoProjektuNaGithubie);
    accordionDemo.setAttribute("href", linkDoAplikacji);

    projectSection.appendChild(clone);
    this.#gsapFirstMountFlag = true;
  };
}
