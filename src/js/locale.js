const langSelector = document.querySelectorAll("#langSelector");
const logo = document.querySelector(".logoImg");
let cookie = "";

//get ONLY lang Cookie
function getLangCookie() {
  let cookies = {};
  let lang = navigator.language || navigator.userLanguage;
  document.cookie.split(";").map(function (el) {
    let [k, v] = el.split("=");
    if (el.length == 2) {
      cookie = el;
    }
    //language change on default browser lang
    if (!cookie && lang === "lt") {
      cookie = "lt";
    }
  });
  return cookie;
}

//toggle logo LT->EN
function toggleLogo(cookie) {
  cookie === "en"
    ? (logo.src = "/src/assets/header_footer/logo_en.png")
    : (logo.src = "/src/assets/header_footer/logo_en.png");
}

function updateContent() {
  const elements = document.getElementsByClassName("element");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const k = element.getAttribute("data");
    element.innerHTML = i18next.t(k);
  }
}
function toggleClass() {
  document.querySelector(`.${i18next.language}`).classList.add("active");
}

async function i18Loader() {
  const langs = ["en", "lt"];
  const jsons = await Promise.all(
    langs.map((l) => fetch("/src/lang/" + l + ".json").then((r) => r.json()))
  );
  const res = langs.reduce((acc, l, idx) => {
    acc[l] = { translation: jsons[idx] };
    return acc;
  }, {});
  await i18next.init({
    lng: cookie ? cookie : "en",
    debug: true,
    resources: res,
  });
  updateContent();

  i18next.on("languageChanged", () => {
    updateContent();
  });

  langSelector.forEach((s) => {
    s.addEventListener("click", (e) => {
      i18next.changeLanguage(e.target.innerText.toLowerCase());
      //30days
      let exp = 2592000;
      document.cookie = `${e.target.innerText.toLowerCase()}; max-age=${exp};`;
      // active class Switcher
      e.target.innerText.toLowerCase() === "en"
        ? s.classList.add("active")
        : langSelector[1].classList.remove("active");

      e.target.innerText.toLowerCase() === "lt"
        ? s.classList.add("active")
        : langSelector[0].classList.remove("active");

      toggleLogo(document.cookie);
    });
  });
  toggleClass();
  toggleLogo();
}
getLangCookie();
i18Loader();
