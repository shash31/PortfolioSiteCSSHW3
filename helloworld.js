class CustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('Hello World');
  }
}

customElements.define('hello-world', CustomElement);