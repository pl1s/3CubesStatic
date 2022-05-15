fetch("./components/footer/footer.html")
  .then((stream) => stream.text())
  .then((response) => defineFooter(response));

function defineFooter(template) {
  class Footer extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = template;

      //encapsulated variables
      this.subBtnContainer = this.querySelector("#subscribe");
      this.subBtn = this.subBtnContainer.querySelector("a");
      this.btnIG = this.querySelector("#redirectIG");
      this.btnFB = this.querySelector("#redirectFB");
      this.btnYT = this.querySelector("#redirectYT");
      this.btnLIn = this.querySelector("#redirectLIn");
    }

    connectedCallback() {
      if (!this.isConnected) return;
      //displaying subscription form on btn pressed
      this.subBtn.onclick = () => {};
      // Displaying newsletter popup
      this.subBtnContainer.onclick = () => {
        if (document.cookie.includes("GDPRConfirmed=functi-true")) {
          getLocalizationLanguage() === "lt"
            ? ml_account("webforms", "5622661", "g9f1k6", "show")
            : ml_account("webforms", "5622651", "p5g7s4", "show");
        } else {
          //Firing custom event
          this.dispatchEvent(new CustomEvent("showNotice"));
        }
        //sending subscription Event to GA4
        gtag("event", "subscribe", {
          event_category: "subscriptions",
          event_label: "subscription_btn_pressed",
        });
      };
      //sending FB social media redirection event to GA4
      this.btnYT.onclick = () => {
        gtag("event", "socialMedia_redirection", {
          event_category: "redirection",
          event_label: "redirected_2_FB",
        });
      };
      //sending LinkedIn social media redirection event to GA4
      this.btnLIn.onclick = () => {
        gtag("event", "socialMedia_redirection", {
          event_category: "redirection",
          event_label: "redirected_2_LinkedIn",
        });
      };
      //sending Instagram social media redirection event to GA4
      this.btnIG.onclick = () => {
        gtag("event", "socialMedia_redirection", {
          event_category: "redirection",
          event_label: "redirected_2_IG",
        });
      };
      //sending Youtube social media redirection event to GA4
      this.btnYT.onclick = () => {
        gtag("event", "socialMedia_redirection", {
          event_category: "redirection",
          event_label: "redirected_2_YT",
        });
      };
    }
  }
  window.customElements.define("footer-comp", Footer);
}
