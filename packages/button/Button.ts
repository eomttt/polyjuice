class Button extends HTMLButtonElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없습니다.
    super();
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ['polyjuice-button'];
  }

  connectedCallback() {
    // DOM에 추가되었다. 렌더링 등의 처리.
  }

  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하.
  }
}

customElements.define('polyjuice-button', Button);
