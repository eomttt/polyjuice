class Button extends HTMLElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없습니다.
    super();
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ['polyjuice-button'];
  }

  connectedCallback() {
    this.innerHTML = '<button />';
  }

  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하.
  }
}

customElements.define('polyjuice-button', Button);

export { Button };
