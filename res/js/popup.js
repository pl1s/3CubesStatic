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
const subContainer = document.querySelector(".container__newsletter");

let consentCookieValue = "";

//GDPR check/toggle display
gdprConfirmed
  ? (gdprPopup.style.display = "none")
  : (gdprPopup.style.display = "block");

//CHECKING functional cookie status and HIDDING it
console.log(document.cookie.indexOf("functi-false") > -1);
if (document.cookie.indexOf("functi-false") > -1) {
  subContainer.style.display = "none";
}

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

//submiting PREFERENCE OPTIONS
const saveConsent = (btn) => {
  consentCookieValue = "";
  switchers.forEach((switcher) => {
    //setting options to FALSE
    if (btn.id === "rejectBtn") {
      switcher.checked = false;
      subContainer.style.display = "none";
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
