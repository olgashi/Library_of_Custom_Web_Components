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
    modalTextSpan.setAttribute("class", "modal-text-container");

    modal.appendChild(modalTextSpan);

    const modalContent = this.getAttribute("text");
    modalTextSpan.innerHTML = modalContent;

    modal.style.display = "none";
    console.log(modal);
    // modal container close button
    const closeModalBtn = document.createElement("button");
    closeModalBtn.innerHTML = "x";
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
    `;
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
    modal.appendChild(closeModalBtn);
    modal.appendChild(modalStyle);
  }
}
// Define the new element
customElements.define("modal-button", ModalComponent);
