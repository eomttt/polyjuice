class Button extends HTMLElement {
  private _root: ShadowRoot;

  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._root.innerHTML = this.template();
  }

  template() {
    return `
      <button>
      <slot name="left-slot"></slot>
      <slot></slot>
      <slot name="right-slot"></slot>
      </button>`;
  }
}

customElements.define('polyjuice-button', Button);

export { Button };
