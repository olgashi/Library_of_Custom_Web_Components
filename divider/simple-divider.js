const dividerStyles = {
  regular: `
    .divider {
      width: 80%;
      height: 1px;
      margin: auto;
      padding-top: 20px;
      margin-bottom: 20px;
      box-shadow: 0px 1px 0px 0px #888888;
    }
    `,
  hidden: `
  .divider {
    width: 80%;
    height: 1px;
    margin: auto;
    padding-top: 20px;
    margin-bottom: 20px;
  } `
};
// Create a class for the element
class DividerComponent extends HTMLElement {
  constructor() {
    super();
  }
  // Divider has the following attributes, that change its appearence:
  // regular
  // hidden
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const divider = document.createElement("div");
    divider.setAttribute("class", "divider");

    const style = document.createElement("style");

    const dividerType = this.getAttribute("type");

    let chosenStyle;
    switch (dividerType) {
      case "regular":
        chosenStyle = dividerStyles.regular;

        break;
      case "hidden":
        chosenStyle = dividerStyles.hidden;
        break;
      default:
        chosenStyle = buttonStyles.regular;
        break;
    }
    style.textContent = chosenStyle;
    shadow.appendChild(style);
    shadow.appendChild(divider);
  }
}
// Define divider element
customElements.define("divider-component", DividerComponent);
