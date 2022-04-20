const gdprConfirmed = document.cookie.includes("GDPRConfirmed");
const gdprPopup = document.getElementById("gdprPopup");
const preference = document.getElementById("preferenceContainer");
const cookieGroup = document.querySelectorAll("#cookieGroup");
const customize = document.getElementById("customizeBtn");
const reject = document.getElementById("rejectBtn");
const accept = document.getElementById("acceptBtn");
const switchers = document.querySelectorAll(
  "input[type=checkbox][name=cookieGroupToggle]"
);

let consentCookieValue = "";

//GDPR check/toggle
gdprConfirmed
  ? (gdprPopup.style.display = "none")
  : (gdprPopup.style.display = "block");

const expandPreference = () => {
  customize.classList.toggle("rotate-arrow");

  //SHOW/HIDE preference section
  toggleDisplay(preference);
};

const expandCookieGroup = (clickedItem) => {
  const group = document.getElementById(`${clickedItem}CookieTable`);
  const chevronArrows = document.querySelectorAll(
    ".popup__container-preference_body-wrapper_accordion-item_chevron"
  );
  //SHOW/HIDE cookieGroup section
  toggleDisplay(group);

  chevronArrows.forEach((arrow) => {
    if (arrow.id === clickedItem) arrow.classList.toggle("rotate-arrow");
    console.log(arrow);
  });
  console.log(switchers);
};

//switching FUNCTIONAL and ANALYTICAL INPUT STATUS
const switchToggle = (switcher) => {
  return !switcher.checked;
};

// const disableAnalytics = () => {
//   if (
//     document.cookie.includes("GDPRConfirmed") &&
//     document.cookie.indexOf("analyt-false")
//   ) {
//     window["ga-disable-GA_MEASUREMENT_ID"] = true;
//   } else {
//     window["ga-disable-GA_MEASUREMENT_ID"] = false;
//   }
// };

//submiting PREFERENCE OPTIONS
const saveConsent = (btn) => {
  consentCookieValue = "";
  switchers.forEach((switcher) => {
    //setting options to FALSE
    if (btn.id === "rejectBtn") {
      switcher.checked = false;
    }
    if (btn.id === "acceptBtn") {
      switcher.checked = true;
    }
    consentCookieValue += `${switcher.id.slice(0, 6)}-${switcher.checked}/`;
  });
  toggleDisplay(gdprPopup);
  return (document.cookie = `GDPRConfirmed=${consentCookieValue}; path=/;`);
};

////FUNCTIONS-HELPERS/////

//toggle function
const toggleDisplay = (element) => {
  element.style.display == "none" || element.style.display === ""
    ? (element.style.display = "block")
    : (element.style.display = "none");
};
