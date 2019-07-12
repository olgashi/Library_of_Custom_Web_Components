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


class ImageCard extends HTMLElement {
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
customElements.define("image-card", ImageCard);
