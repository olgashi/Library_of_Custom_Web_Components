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
        break;
      case "outlined":
        chosenStyle = buttonStyles.outlined;
        break;
      case "positive":
        chosenStyle = buttonStyles.positive;
        break;
      case "negative":
        chosenStyle = buttonStyles.negative;
        break;
      case "disabled":
        chosenStyle = buttonStyles.disabled;
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
          question.style.cursor = "pointer";
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

const styleSize = { 
  small:`
  .wrapper {
  display: block;
    width: 200px;
    height: 250px; 
    border: 1px solid grey;
    box-shadow: 1px 1px 3px #000000;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #E3F4FF;
  }   
  img {
    display: block;
    width: 200px;
    height: 222px
    border-radius: 5px;
  }
  
  .info {
    display: block
    background: white;
    font-size: 0.7em;
    height: 64px;
    font-family: Georgia, serif;
    background: #FFFFFF;
    color: #3D527A;
    border-radius: 5px;
    position: relative;
    bottom: 0px;
    justify-text: center;
    padding: 10px;
    justify-text: justify;
  }`,
  large: `
    .wrapper {
      display: block;
      width: 350px;
      height: 370px; 
      border: 1px solid grey;
      box-shadow: 1px 1px 3px #000000;
      background: #FFFFFF;

      border-radius: 5px;
      border: 1px solid #E3F4FF;
    }   
    img {
      display: block;
      width: 350px;
      height: 322px
      border-radius: 5px;
    }    
    .info {
      display: block
      background: #FFFFFF;
      font-size: 0.9em;
      height: 34px;
      font-family: Georgia, serif;
      color: #3D527A;
      border-radius: 5px;
      position: relative;
      bottom: 0px;
      justify-text: center;
      padding: 10px;
      justify-text: justify;
  }`
}


 class ImageCardComponent extends HTMLElement {
  constructor() {
    super();
     // Create a shadow root
     const shadow = this.attachShadow({ mode: "open" });
     // Create spans
     const wrapper = document.createElement("div");
     wrapper.setAttribute("class", "wrapper");
 
     const icon = document.createElement("span");
     icon.setAttribute("class", "icon");
     icon.setAttribute("tabindex", 0);
 
     const info = document.createElement("div");
     info.setAttribute("class", "info");
 

     const text = this.getAttribute("text");
     info.textContent = text;
     
     let imgUrl = this.getAttribute("img");
     
     const img = document.createElement("img");
     img.src = imgUrl;
     icon.appendChild(img);
     
     const style = document.createElement("style");
     
     // get size attribute
     let chosenSize;
     const size = this.getAttribute("size");
     switch(size){
       case 'small':
         chosenSize =styleSize.small
         break;
       case 'large':
         chosenSize =styleSize.large
         break;
      default:
        chosenSize =styleSize.smallbreak
     }
    style.textContent = chosenSize
     // Attach the created elements to the shadow dom
     shadow.appendChild(style);
     shadow.appendChild(wrapper);
     wrapper.appendChild(icon);
     wrapper.appendChild(info);
  }
}
// Define the new element
customElements.define("image-card", ImageCardComponent);


// Button that reveals hidden text and destroys itself on click
 class RevealInfoComponent extends HTMLElement {
  connectedCallback() {
    const paragraphs = Array.from(this.querySelectorAll(':root p'));
    paragraphs.forEach(p => {
      p.style.display="none"
    })

    const button = document.createElement("button");
    button.setAttribute("class", "btn");
    button.innerHTML = "Reveal text"
    const showHiddenContent = document.createElement('div')
    
    button.addEventListener("click", () => {
        
      paragraphs.forEach(paragraph => {
        paragraph.style.display="inline-block"
        showHiddenContent.appendChild(paragraph)
      })

      this.append(showHiddenContent);
      showHiddenContent.style.width="100%"  
      button.remove()
    });

    const style = document.createElement("style");
    style.textContent = `
    .btn {
      width: 100px;
      height: 30px;
      background: #299F12;
      color: white;
      border-radius: 5px;
    }
    .btn:focus{
      outline: 0;
    }
    .btn:hover {
      background: #579F12;
      cursor: pointer;
    }
  `;
    button.appendChild(style)
    this.append(button)
  }
}
customElements.define("reveal-text", RevealInfoComponent);

// Create a class for the element
 class TooltipComponent extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("text");
    info.textContent = text;

    // Insert icon
    let imgUrl = this.getAttribute("img");

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);
    const style = document.createElement("style");

    let sizeAttribute;
    let setFontSize;
    if (this.hasAttribute("size")) {
      sizeAttribute = this.getAttribute("size");
      switch (sizeAttribute) {
        case "small":
          setFontSize = "0.6em";
          break;
        case "medium":
          setFontSize = "0.9em";
          break;
        case "large":
          setFontSize = "1.3em";
          break;
        default:
          setFontSize = "1em";
      }
    }
    style.textContent = `
      .wrapper {
        position: relative;
        margin-top: 50px;
      }

      .info {
        width: 100px;
        display:  inline-block;
        padding: 10px;
        background: white;
        border: 1px solid #3D527A;
        font-weight: bold;
        font-size: ${setFontSize};
        font-family: Georgia, serif;
        color: #3D527A;
        border-radius: 5px;
        opacity: 0;
        transition: 0.7s all;
        position: absolute;
        bottom: 10px;
        left: 50px;
        z-index: 3;
        box-shadow: 2px 2px 5px #000000;
      }

      img {
        width: 4rem;
        padding-top: 50px;
        margin-right: 70px;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define("tooltip-component", TooltipComponent);

 class NavBarComponent extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const navBar = document.createElement("div")
    navBar.setAttribute("class", "nav");

    const linkContainer = document.createElement("div")
    linkContainer.setAttribute("class", "linkContainer");

    const links = Array.from(this.querySelectorAll(':root a'));
    links.forEach(a => {
      linkContainer.appendChild(a)
    })

    const logo = this.querySelector('img')
    if (logo) {
      const logoContainer = document.createElement("div")
      logoContainer.setAttribute("class", "logoContainer");
      logoContainer.appendChild(logo)
      linkContainer.appendChild(logoContainer)
    }

    const style = document.createElement("style");

    style.textContent = `
      .nav {
      }
      .linkContainer {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100px;
        background: #3D527A;    
        margin: 0 auto;
      }
      
      a {
        color: #E3F4FF;
        margin: auto;
        text-decoration: none;
        font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
        font-size: 1.3em;
        cursor: pointer;
      } 
      .logoContainer {
        padding-top: 20px;
        width: 80px;
        height: 80px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(navBar);
    navBar.appendChild(linkContainer) 
  } 
}
customElements.define("nav-bar", NavBarComponent)

// Create a class for the element
 class ModalComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const modalButton = document.createElement("button");
    modalButton.setAttribute("class", "btn");

    const style = document.createElement("style");

    const buttonText = this.getAttribute("label");
    modalButton.innerHTML = buttonText;

    // modal container
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal-container");

    const modalTextSpan = document.createElement("span");
    modalTextSpan.setAttribute("class", "modal-text-container")

    modal.appendChild(modalTextSpan)

    const modalContent = this.getAttribute("text");
    modalTextSpan.innerHTML = modalContent

    modal.style.display = "none";
    // modal container close button
    const closeModalBtn = document.createElement("button");
    closeModalBtn.innerHTML="x"
    closeModalBtn.setAttribute("class", "modal-close-btn");

    // modal styles
    const modalStyle = document.createElement("style");
    modalStyle.textContent = `
      .modal-container {
        position: fixed; 
        z-index: 1; 
        left: 200px;
        top: 200px;
        width: 300px;
        height: 200px; 
        background: #F0F4FF;
        border: 1px solid #2679B1;
      }
      .modal-close-btn {
        position: absolute;
        right: 3px;
        top: 3px;
        width: 20px;
        height: 20px;
        background: #FF452D;
        color: white;
        opacity: 0.5;
      }
      .modal-text-container {
        display: block;
        height: 100px;
        width: 80%;
        margin: auto;
        margin-top: 40px;
        padding-left: 10px;
        padding-right: 10px;
        color: #14415E;
        text-align: justify;
        opacity: 0.8;
      }
      .modal-close-btn:focus{
        outline: 0;
      }
      .modal-close-btn:hover {
        opacity: 0.9;
        background: #DE0F00;
        cursor: pointer;
      }
    `
    // Event Listener on modal button
    modalButton.addEventListener("click", function() {
      modal.style.display = "block";
    });

    // Event listener on close modal button

    closeModalBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
    style.textContent = `
    .btn {
      width: 100px;
      height: 30px;
      background: #299F12;
      color: white;
      border-radius: 5px;
    }
    .btn:focus{
      outline: 0;
    }
    .btn:hover {
      background: #579F12;
      cursor: pointer;
    }
  `;
    shadow.appendChild(style);
    shadow.appendChild(modalButton);
    shadow.appendChild(modal);
    modal.appendChild(closeModalBtn)
    modal.appendChild(modalStyle)
  }
}

customElements.define("modal-button", ModalComponent)