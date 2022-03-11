document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    // console.log(window.scrollY);
  });
});
// const loginBtn = document.querySelector("button");
// const required = document.querySelector("#required");
// const min = document.querySelector("#length");
// const symbols = document.querySelector("#symbols");
// const container = document.querySelector(".validation");
// const form = document.querySelector("form");
// const pass = document.querySelector('input[name="password');
// const username = document.querySelector('input[name="username');
// const regExp = /[“‘/$&\;]/g;
// const inputs = [pass, username];
// let msgArr = [];

// const Validate = () => {
//   inputs.map((input) => {
//     if (input.value === "") msgArr.push("1");
//     if (input.value.length < 3) msgArr.push("2");
//     if (input.value.match(regExp)) msgArr.push("3");

//     msgArr = [...new Set(msgArr)];
//     console.log(msgArr);
//   });
//   msgArr.map((number) => {
//     container.style.display = "flex";
//     if (number === "1") required.style.display = "block";
//     if (number === "2") min.style.display = "block";
//     if (number === "3") symbols.style.display = "block";
//     //resets
//     form.reset();
//     msgArr = [];
//   });
// };

// loginBtn.addEventListener("click", Validate);
