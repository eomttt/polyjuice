class Button extends HTMLElement {
  constructor() {
    super();
  }

  get leftSlot() {
    return this.getAttribute('left-slot');
  }

  connectedCallback() {
    this.innerHTML = this.template({
      leftSlot: this.leftSlot,
    });
  }

  template(state: { leftSlot: any }) {
    return `<button>${this.innerHTML}</button>`;
  }
}

export { Button };
