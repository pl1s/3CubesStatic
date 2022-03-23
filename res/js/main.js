document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll("#contactBtn");
  const scrollingElement = document.scrollingElement || document.body;

  btn.forEach((x) => {
    x.addEventListener("click", () => {
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    });
  });
});
