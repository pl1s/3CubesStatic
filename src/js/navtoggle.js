document.addEventListener("DOMContentLoaded", function () {
  //activeClass on active path
  const navContainer = document.querySelector(".right-side__navigation");
  let navs = navContainer.getElementsByClassName("nav");

  for (let i = 0; i < navs.length; i++) {
    if (document.location.href.indexOf(navs[i].href) >= 0) {
      navs[i].className = "element active";
    }
  }

  //hide-show shadowClass toggle
  const header = document.querySelector("header");
  let prevScrollpos = window.scrollY;

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      header.classList.add("shadow");
    } else if (window.innerWidth > 1024 && prevScrollpos <= currentScrollPos) {
      header.style.top = "-15vh";
    }

    if (currentScrollPos === 0) {
      header.classList.remove("shadow");
    }
    prevScrollpos = currentScrollPos;

    if (window.innerWidth < 1024 && currentScrollPos > 0) {
      header.classList.add("shadow");
    }
  };

  //toggle navmenu on smaller screens & hamburger toggle
  const hambuger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".right-side__navigation");
  const links = document.querySelectorAll(
    ".right-side__navigation h5, .right-side__language"
  );
  const lines = document.querySelectorAll(".line");

  hambuger.addEventListener("click", () => {
    lines[0].classList.toggle("topLine");
    lines[1].classList.toggle("hide");
    lines[2].classList.toggle("bottomLine");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
  //collapsible nav
  let coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});
