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
    let setColor = `teal`;

    // check if 'popup-color' attribute was used
    if (this.hasAttribute("popup-color")) {
      setColor = this.getAttribute("popup-color");
    }
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
