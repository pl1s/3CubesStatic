fetch("./components/header/header.html")
  .then((stream) => stream.text())
  .then((response) => defineHeader(response));

function defineHeader(template) {
  class Header extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = template;

      //VARIABLES
      this.navContainer = this.querySelector(".right-side__navigation");
      this.navs = this.navContainer.getElementsByClassName("nav");

      this.header = document.querySelector("header");
      this.prevScrollpos = window.scrollY;

      this.hamburger = this.querySelector(".hamburger");
      this.navLinks = this.querySelector(".right-side__navigation");
      this.links = this.querySelectorAll(
        ".right-side__navigation h5, .right-side__language"
      );
      this.lines = this.querySelectorAll(".line");
      this.coll = this.getElementsByClassName("collapsible");

      this.logo = this.querySelector(".logoImg");
      this.langSelector = this.querySelectorAll("#langSelector");

      this.dropdown = this.querySelectorAll('.dropdown');
    }

    connectedCallback() {
      if (!this.isConnected) return;
      //checks for active href and adds class
      for (let i = 0; i < this.navs.length; i++) {
        if (document.location.href.indexOf(this.navs[i].href) >= 0) {
          this.navs[i].className = "element active";

          if (document.location.href.includes('lessons')) {
            this.dropdown[0].classList.add('active');
          }
        }
      }

      //toggle header style depending on window.width
      window.onscroll = () => {
        this.currentScrollPos = window.scrollY;
        // if (this.prevScrollpos > this.currentScrollPos) {
        //   this.header.style.top = "0";
        //   this.header.classList.add("shadow");
        // } else if (
        //   window.innerWidth > 1024 &&
        //   this.prevScrollpos <= this.currentScrollPos
        // ) {
        //   this.header.style.top = "-15vh";
        // }

        if (this.currentScrollPos === 0) {
          this.header.classList.remove("shadow");
        } else {
          this.header.classList.add("shadow");
        }

        this.prevScrollpos = this.currentScrollPos;

        if (window.innerWidth < 1024 && this.currentScrollPos > 0) {
          this.header.classList.add("shadow");
        }
      };

      //attaching on click event for nav icon
      this.hamburger.onclick = () => {
        this.lines[0].classList.toggle("topLine");
        this.lines[1].classList.toggle("invisible");
        this.lines[2].classList.toggle("bottomLine");
        this.navLinks.classList.toggle("open");
        this.links.forEach((link) => {
          link.classList.toggle("fade");
        });
      };
      //collapsible navigation
      for (let i = 0; i < this.coll.length; i++) {
        this.coll[i].onclick = () => {
          this.classList.toggle("active");
          this.content = this.nextElementSibling;
          if (this.content.style.display === "block") {
            this.content.style.display = "none";
          } else {
            this.content.style.display = "block";
          }
        };
      }
    }
  }
  window.customElements.define("header-comp", Header);
}
