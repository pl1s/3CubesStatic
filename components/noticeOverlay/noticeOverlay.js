fetch("./components/noticeOverlay/noticeOverlay.html")
  .then((stream) => stream.text())
  .then((response) => defineOverlay(response));

function defineOverlay(template) {
  class noticeOverlay extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = template;

      this.section = this.querySelector(".noticeOverlay");
      this.dialogBox = this.querySelector(".noticeOverlay__boxContainer");
      this.cookieContainer = this.querySelector(".noticeOverlay__imgContainer");
      this.cookieBtn = this.querySelector(
        ".noticeOverlay__imgContainer-cookieBtn"
      );
      this.cookieImg = this.querySelector(
        ".noticeOverlay__imgContainer-cookieImg"
      );
    }

    connectedCallback() {
      if (!this.isConnected) return;

      this.cookieBtn.onclick = () => {
        this.dispatchEvent(new CustomEvent("showGDPR"));
      };
      //adding additional attribute for cookie settings element (revisit consent)
      //much needed to create custom Alt graphic
      this.assignAttribute();
      cookieStore.onchange = () => {
        this.assignAttribute();
      };
    }
    //function triggered on showNotice custom event
    show() {
      this.section.style.background = "rgba(0, 0, 0, 0.6)";
      this.dialogBox.style.display = "block";
      this.cookieImg.classList.add("blink");
    }
    hide() {
      this.section.style.background = "transparent";
      this.dialogBox.style.display = "none";
      this.cookieImg.classList.remove("blink");
    }
    //function triggered on  custom event
    assignAttribute() {
      localizationLanguage === "en"
        ? this.cookieContainer.setAttribute("value", "Cookie Settings")
        : this.cookieContainer.setAttribute("value", "Slapukų Nustatymai");
    }
  }
  window.customElements.define("notice-overlay", noticeOverlay);
}
