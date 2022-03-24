const langSelector = document.querySelectorAll("#langSelector");
const logo = document.querySelector(".logoImg");
var localizationLanguage

// Parameter hiding to the next level - EVERYTHING is name cookie...
// //get ONLY lang Cookie
// function getLangCookie() {
//   let cookies = {};
//   let lang = navigator.language || navigator.userLanguage;
//   document.cookie.split(";").map(function (el) {
//     let [k, v] = el.split("=");
//     if (el.length == 2) {
//       cookie = el;
//     }
//     //language change on default browser lang
//     if (!cookie && lang === "lt") {
//       cookie = "lt";
//     }
//   });
//   return cookie;
// }

// Get localization language from current memory or load it from cookie;
function getLocalizationLanguage()
{
  if(!localizationLanguage)
  {
    let localizationParameter = document.cookie.split(";").find(s => s.includes("loc_lang"));
    if(!localizationParameter)
    {
      setLocalizationLanguage("en");
      localizationParameter="loc_lang=en";
      return "en";
    }
    localizationLanguage = localizationParameter.split('=')[1];
  }  

  return localizationLanguage; 
}

// Set the localization language parameter in the cookie to the given value
function setLocalizationLanguage(value, expiration=2592000)
{
  document.cookie = `loc_lang=${value}; max-age=${expiration}; path=/;`;
  localizationLanguage = value;
}

//toggle logo LT->EN
function toggleLogo(lang) {
  lang === "en"
    ? (logo.src = "/res/img/header_footer/logo_en.png")
    : (logo.src = "/res/img/header_footer/logo_en.png");
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
    langs.map((l) => fetch("/res/lang/" + l + ".json").then((r) => r.json()))
  );
  const res = langs.reduce((acc, l, idx) => {
    acc[l] = { translation: jsons[idx] };
    return acc;
  }, {});
  await i18next.init({
    lng: localizationLanguage ? localizationLanguage : "en",
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
      setLocalizationLanguage(e.target.innerText.toLowerCase()); // NOTE: Not a very good practice to use visual elements as values; 
      // active class Switcher
      localizationLanguage === "en"
        ? s.classList.add("active")
        : langSelector[1].classList.remove("active");

      localizationLanguage === "lt"
        ? s.classList.add("active")
        : langSelector[0].classList.remove("active");

      toggleLogo(localizationLanguage);
    });
  });
  toggleClass();
  toggleLogo();
}

getLocalizationLanguage();
i18Loader();
