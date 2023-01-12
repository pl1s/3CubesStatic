document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll("#contactBtn");
  const scrollingElement = document.scrollingElement || document.body;
  const invisibleElements = document.querySelectorAll(".no_En");
  const footer = document.querySelector("footer-comp");
  const gdpr = document.querySelector("gdpr-popup");
  const notice = document.querySelector("notice-overlay");

  //listening child custom events from parent component
  footer.addEventListener("showNotice", () => notice.show());
  gdpr.addEventListener("hideNotice", () => notice.hide());
  notice.addEventListener("showGDPR", () => gdpr.show());

  btn.forEach((x) => {
    x.addEventListener("click", () => {
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    });
  });

  // HIDE/SHOW sections depending on lang
  // first-auto hide application
  window.onload = () => {
    if (localizationLanguage === "en") {
      invisibleElements.forEach((x) => {
        x.classList.add("hide");
      });
    }

    //clicking case
    headerComp.langSelector.forEach((s) => {
      s.addEventListener("click", (e) => {
        invisibleElements.forEach((x) => {
          if (localizationLanguage === "en") {
            x.classList.remove("hide");
          } else {
            x.classList.add("hide");
          }
        });
      });
    });
  };
});

//btn sends gtag event and plays vid
const play = (video) => {
  video.children[0].play = true;
  //removing attribute if video clicked > 1 per visit (e.g.:paused..)
  video.removeAttribute("onclick");
};

