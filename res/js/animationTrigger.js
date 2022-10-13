function animationTriggerCallback(entries, ovserver) {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("play-animation");
      inViewObserver.unobserve(entry.target);
    }
  }
}

let inViewObserver = new IntersectionObserver(animationTriggerCallback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});
let elements = document.getElementsByClassName("fade-in-item");

for (let i = 0; i < elements.length; i++) {
  inViewObserver.observe(elements[i]);
}

//Products Page
//Sortable element
var A = document.getElementById("3grade");
var B = document.getElementById("4grade");
var C = document.getElementById("Xgrade");

var sortable = Sortable.create(A, {
  animation: 200,
  group: {
    name: "shared",
    put: false,
    pull: "clone",
  },
});
var sortable = Sortable.create(B, {
  animation: 200,
  group: {
    name: "shared",
    put: false,
    pull: "clone",
  },
});
var sortable = Sortable.create(C, {
  animation: 200,
  swapThreshold: 1,
  group: {
    name: "shared",
    pull: "clone",
  },
});

//Style corrections
let defaultModuleHeight = A.clientHeight;
let defaultModuleWidth = A.clientWidth;

// Title
let customTitle = document.getElementById("customTitle");
let defaultTitleHeight = document.getElementById("defaultTitle").clientHeight;
// if(document.cookie.)
B.setAttribute(
  "style",
  `height:${defaultModuleHeight}px;width:${defaultModuleWidth + 22}px;`
);
// A.setAttribute(
//   "style",
//   `height:${defaultModuleHeight}px;width:${defaultModuleWidth}px;`
// );
C.setAttribute(
  "style",
  `height:${defaultModuleHeight}px;width:${defaultModuleWidth + 22}px;`
);
if (window.scrollX >= 767)
  customTitle.setAttribute("style", `height:${defaultTitleHeight}px;`);
