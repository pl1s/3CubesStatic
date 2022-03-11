document.addEventListener("DOMContentLoaded", function () {
  //hide-show shadowClass toggle
  const header = document.querySelector("header");
  let prevScrollpos = window.scrollY;

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      header.classList.add("shadow");
    } else if (window.innerWidth > 1500 && prevScrollpos <= currentScrollPos) {
      header.style.top = "-15vh";
    }

    if (currentScrollPos === 0) {
      header.classList.remove("shadow");
    }
    prevScrollpos = currentScrollPos;

    if (window.innerWidth < 1500 && currentScrollPos > 0) {
      header.classList.add("shadow");
    }
  };

  //toggle navmenu on smaller screens
  const hambuger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".right-side__navigation");
  const links = document.querySelectorAll(".right-side__navigation a");

  hambuger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
});
