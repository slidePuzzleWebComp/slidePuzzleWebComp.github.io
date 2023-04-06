customElements.define(
  "puzzle-tile",
  class extends HTMLElement {
    connectedCallback() {
      if (this.id == "blankTile") {
        this.innerHTML = `<div
          id="blankTile"
          class="tiles"
          ondrop="drop(event)"
          ondragover="allowDrop(event)"
        ></div>`;
      } else {
        this.innerHTML = `<div
        id= "${this.id}"
        class="tiles"
        draggable="true"
        ondragstart="drag(event)"
      ></div>`;
      }
    }
  }
);

customElements.define(
  "slide-puzzle",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(document.getElementById('SLIDE-PUZZLE').content.cloneNode(true));
      
    }
    connectedCallback() {}
  }
);
