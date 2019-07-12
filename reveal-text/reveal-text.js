// Button that reveals hidden text and destroys itself on click
class RevealInfoComponent extends HTMLElement {
  // connectedCallback() runs each time the element is added to the DOM
  connectedCallback() {
    // grab all paragraphs and set display to none
    const paragraphs = Array.from(this.querySelectorAll(':root p'));
    paragraphs.forEach(p => {
      p.style.display="none"
    })
    const button = document.createElement("button");
    button.setAttribute("class", "btn");
    button.innerHTML = "Reveal-text"
    const showHiddenContent = document.createElement('div')
    //event listener
    button.addEventListener("click", () => {
      paragraphs.forEach(paragraph => {
        paragraph.style.display="inline-block"
        showHiddenContent.appendChild(paragraph)
      })
      this.append(showHiddenContent);
      showHiddenContent.style.width="100%"  
      // remove button once event took place
      button.remove()
    });
    // create style element and apply style
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
// CustomElementRegistry object allows to register a custom element on the page
// the browser will recognize <reveal-text></reveal-text> as a custom web component 
// and will treat it like any other html tag
customElements.define("reveal-text", RevealInfoComponent);