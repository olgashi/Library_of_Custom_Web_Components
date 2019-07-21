# A Small Library of Custom Web components

# To use include in your html script tag:
# 
```
https://unpkg.com/npm-os-web-components@1.0.5/main.js
```
# 1. A simple navbar component that has multiple links and a logo.
```<nav-bar></nav-bar>```
# Example code:
```
  <nav-bar>
    <img src='img/logo.png'>
    <a href="https://www.somepage.com/">Link1</a>
    <a href="https://www.somepage.com/">Link2</a>
    <a href="https://www.somepage.com/">Link3</a>
    <a href="https://www.somepage.com/">Link4</a>
    <a href="https://www.somepage.com/">Link5</a>
  </nav-bar>
  ```
   
# 2. Divider component. Attributes: type (hidden, regular).
# Example code:
```<divider-component type="hidden"></divider-component>```

# 3. Dictionary component using template and slots.
# Displays a list of questions/terms; on click displays corresponding answers and picture if any.
   
#Example code:

```
  <dictionary-component>
    <ul slot="question-list">
      <li>Why do cats purr?</li>
      <li>Why cats sleep so much?</li>
      <li>How high can cats jump?</li>
      <li>Why do cats love boxes?</li>
    </ul>

     <p data-name="Why do cats purr?">Purring for cats is the same as smiling for humans.</p>
     <p data-name="Why cats sleep so much?">Basically, cats sleep a lot because they need to conserve energy,      so they can hunt during the day.</p>
     <p data-name="How high can cats jump?">Cats can jump five times their height. WOW!</p>
     <p data-name="Why do cats love boxes?">Cats love being inside a box because they feel safe there.</p>

     <img data-name="Why do cats purr?" src="img/purr.png"></img>
     <img data-name="Why cats sleep so much?" src="img/sleep.png"></img>
     <img data-name="How high can cats jump?" src="img/jump.png"></img>
     <img data-name="Why do cats love boxes?" src="img/box.png"></img>
  </dictionary-component>
 ```
#<!-- Template is used to insert appropriate answers and images in slots -->
``` 
  <template id="summary-display-template">
      <article>
        <div>
          <slot name="question-list"></slot>
        </div>
        <div class="answer">
          <div>
            <slot name="answer"></slot>
          </div>
          <div>
            <slot name="image"></slot>
          </div>
        </div>
      </article>
    </template>
```
  
# 4. Button Component
# Types: outlined, regular, positive, negative, and disabled. Attributes: label and type.
# Example code:
```<my-button label='Outlined' type="outlined" onClick=displayAlert()></my-button>```

# 5. "Reveal-text" component.
# Reveals text on click and then removes itself from the DOM. It can take any number of paragraphs.
# Example code:
```   
      <reveal-text>
       <p>some text</p>
       <p>some mopre text</p>
       <p>even more text</p>
      </reveal-text>
```

# 6. Tooltip component.
# Displays text on hover. Attributes: img, text, size (small, medium, large).
# Example code:
``` <tooltip-component img="img.png" text="text to display" size="large"></tooltip-component>```

# 7. Image-Card component.
# Displays an image and a short description. Attributes: image, text, size (small, large).
# Example code:
``` <image-card img="img/cat1.jpg" size="small" text="Some text"></image-card>```
    
# 8. Modal Component.
# Displays a box/popup window on click. Attributes: label, text.
# Example code:
``` <modal-button label='Open Modal' text="Some text"></modal-button>```
