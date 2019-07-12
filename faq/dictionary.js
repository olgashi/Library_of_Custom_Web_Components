//FAQ type component using templates and slots
class DictionaryComponent extends HTMLElement {
  constructor() {
    super();
    //
    this.style.marginBottom="300px";
    const template = document.getElementById("summary-display-template");
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
    //questions in array
    const questions = Array.from(this.querySelectorAll("li"));
    // answers
    const answers = Array.from(this.querySelectorAll("p"));
    // corresponding pictures
    const images = Array.from(this.querySelectorAll("img"));

    questions.forEach(question => {
      handleClick(question);
    });

    function handleClick(question) {
      // attach eventlistener to each question
      question.addEventListener("click", function() {
        questions.forEach(question => {
          // to make sure the active question is different color but all other stay default color
          question.style.color = "#002E7A";
        });
        //iterate over array with answers
        answers.forEach(answer => {
          // call updateDisplay passing selected question and each answer
          images.forEach(image => {
            updateDisplay(answer, question, image);
          });
        });
      });
    }

    function updateDisplay(answer, question, image) {
      answer.removeAttribute("slot");
      image.removeAttribute("slot");
      // determine which question is asked
      // pick appropriate answer and image
      if (answer.getAttribute("data-name") === question.textContent) {
        answer.setAttribute("slot", "answer");
      }
      if (image.getAttribute("data-name") === question.textContent) {
        image.setAttribute("slot", "image");
      }
      question.style.color = "green";
    }
  }
}
customElements.define("dictionary-component", DictionaryComponent);
