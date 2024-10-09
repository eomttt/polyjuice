class Switch extends HTMLElement {
  private _root: ShadowRoot;

  private _control: HTMLElement | null = null;
  private _thumb: HTMLElement | null = null;
  private _input: HTMLInputElement | null = null;

  private _checked: boolean = false;

  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
  }

  handleChange = (event: Event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    this._checked = (event.target as HTMLInputElement).checked;

    if (this._checked) {
      this._control?.setAttribute('data-state', 'checked');
      this._thumb?.setAttribute('data-state', 'checked');
      this._input?.setAttribute('checked', String(this._checked));
    } else {
      this._control?.setAttribute('data-state', 'unchecked');
      this._thumb?.setAttribute('data-state', 'unchecked');
      this._input?.removeAttribute('checked');
    }
  };

  connectedCallback() {
    this.render();

    this._control = this._root.querySelector('slot[name="control"]');
    this._thumb = this._root.querySelector('slot[name="thumb"]');
    this._input = this._root.querySelector<HTMLInputElement>(
      'input[type="checkbox"]'
    );

    this._input?.addEventListener('change', this.handleChange);
  }

  disconnectedCallback() {
    this._input?.removeEventListener('change', this.handleChange);
  }

  render() {
    this._root.innerHTML = this.template();
  }

  template() {
    return `
      <label>
        <slot name="control" data-state="${this._checked ? 'checked' : 'unchecked'}">
          <slot name="thumb" data-state="${this._checked ? 'checked' : 'unchecked'}"></slot>
        </slot>
        <slot name="label"></slot>
        <input type="checkbox" hidden />
      </label>`;
  }
}

customElements.define('polyjuice-switch', Switch);

export { Switch };
