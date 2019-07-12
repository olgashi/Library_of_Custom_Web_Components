const buttonStyles = {
  outlined: `
    .btn {
      display: inline-block;
      width: 100px;
      height: 30px;
      background: white;
      border: 1px solid #2679B1;
      border-radius: 5px;
      cursor: pointer;
      color: #2679B1;
      font-size: 0.8em;
      font-family: "Verdana";
    }
    .btn:focus{
      outline: 0;
    }
    .btn:hover {
      background: #E3F4FF;
    }
    `,
  regular: `
    .btn {
      display: inline-block;
      width: 100px;
      height: 30px;
      background: #2679B1;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      font-size: 0.8em;
      font-family: "Verdana";

    }
    .btn:focus{
      outline: 0;
    }
    .btn:hover {
      background: #6BC1FA;
    }
    `,
  positive: `
    .btn {
      display: inline-block;
      width: 100px;
      height: 30px;
      background: #02BA00;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      font-size: 0.8em;
      font-family: "Verdana";
    }
    .btn:focus{
      outline: 0;
    }
    .btn:hover {
      background: #8ABA07;
    }
    `,
  negative: `
    .btn {
      display: inline-block;
      width: 100px;
      height: 30px;
      background: #E83E1A;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      font-size: 0.8em;
      font-family: "Verdana";
    }
    .btn:focus{
      outline: 0;
    }
    .btn:hover {
      background: #F27C1B;
    }
    `,
    disabled: `
    .btn {
      display: inline-block;
      width: 100px;
      height: 30px;
      background: #396980;
      border-radius: 5px;
      color: #99BCCC;
      font-size: 0.8em;
      font-family: "Verdana";
    }
    .btn:focus{
      outline: 0;
    }
    .btn:disabled {
      background: #F27C1B;
    }
    `
};
// Create a class for the element
class ButtonComponent extends HTMLElement {
  constructor() {
    super();
  }

  // Button has the following attributes, that change its color theme:
  // outlined
  // regular
  // positive
  // negative
  // add disabled

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const myButton = document.createElement("button");
    myButton.setAttribute("class", "btn");

    const style = document.createElement("style");

    const buttonText = this.getAttribute("label");
    myButton.innerHTML = buttonText;

    const buttonType = this.getAttribute("type");

    let chosenStyle;

    switch (buttonType) {
      case "regular":
        chosenStyle = buttonStyles.regular;
        console.log(chosenStyle)
        break;
      case "outlined":
        chosenStyle = buttonStyles.outlined;
        console.log(chosenStyle)
        break;
      case "positive":
        chosenStyle = buttonStyles.positive;
        console.log(chosenStyle)
        break;
      case "negative":
        chosenStyle = buttonStyles.negative;
        console.log(chosenStyle)
        break;
      case "disabled":
        chosenStyle = buttonStyles.disabled;
        console.log(chosenStyle)
        break;
      default:
        chosenStyle = buttonStyles.regular;
        break;
    }

    style.textContent = chosenStyle;
    shadow.appendChild(style);
    shadow.appendChild(myButton);
  }
}

// Define the new element
customElements.define("my-button", ButtonComponent);
