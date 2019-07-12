class NavBar extends HTMLElement {
  // do something with it
  static get observedAttributes() {
    return ['color'];
  }
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
    const logoContainer = document.createElement("div")
    logoContainer.setAttribute("class", "logoContainer");
    logoContainer.appendChild(logo)
    linkContainer.appendChild(logoContainer)

    console.log('--->',logo)
    const button = document.createElement("button")
    button.setAttribute("class", "btn");

    button.innerHTML = "Click and see what happens..."

    const style = document.createElement("style");

    button.addEventListener("click", () => {
      navBar.style.background="purple"

      button.remove()

    });

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
      } 
      .logoContainer {
        padding-top: 20px;
        width: 80px;
        height: 80px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(navBar);
    // navBar.appendChild(button);
    navBar.appendChild(linkContainer)
    
  }
  
  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal
  }


}

customElements.define("nav-bar", NavBar)