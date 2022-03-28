document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll("#contactBtn");
  const scrollingElement = document.scrollingElement || document.body;
  const invisibleElements = document.querySelectorAll(".no_En");

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
  };

  //clicking case
  langSelector.forEach((s) => {
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
});
