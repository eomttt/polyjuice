class Button extends HTMLElement {
  private _root: ShadowRoot;

  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
  }

  get leftSlot() {
    return this.getAttribute('left-slot');
  }

  get rightSlot() {
    return this.getAttribute('right-slot');
  }

  connectedCallback() {
    this._root.innerHTML = this.template({
      leftSlot: this.leftSlot,
      rightSlot: this.rightSlot,
    });
  }

  template(state: { leftSlot: any; rightSlot: any }) {
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
