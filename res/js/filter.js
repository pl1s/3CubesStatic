document.addEventListener("DOMContentLoaded", function () {
  const all = document.querySelectorAll(".filterEl");
  const event = document.querySelectorAll(".event");
  const conference = document.querySelectorAll(".conference");
  //btns
  const allBtn = document.querySelector(".allBtn");
  const eventBtn = document.querySelector(".eventBtn");
  const confBtn = document.querySelector(".confBtn");
  const smallBtn = document.querySelector(".smallBtn");
  //filter Displayer
  const displayer = document.querySelector(".filterTxt");
  //init
  window.onload = () => {
    filterSelection("all");
    filterDisplayer(allBtn);
  };

  function filterSelection(c) {
    let i;
    if (c == "all") c = "";
    for (i = 0; i < all.length; i++) {
      RemoveClass(all[i], "show");
      if (all[i].className.indexOf(c) > -1) {
        AddClass(all[i], "show");
      }
    }
  }

  function AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  function filterDisplayer(btn) {
    displayer.innerHTML = btn.getElementsByClassName("element")[0].innerHTML;
  }

  // Add active class to the current button (highlight it)
  let btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[1].className = current[1].className.replace(" active", "");
      this.className += " active";
    });
  }

  eventBtn.addEventListener("click", () => {
    filterSelection("event");
    filterDisplayer(eventBtn);
  });
  allBtn.addEventListener("click", () => {
    filterSelection("all");
    filterDisplayer(allBtn);
  });
  confBtn.addEventListener("click", () => {
    filterSelection("conference");
    filterDisplayer(confBtn);
  });
  smallBtn.addEventListener("click", () => {
    filterSelection("all");
    filterDisplayer(smallBtn);
  });
});
