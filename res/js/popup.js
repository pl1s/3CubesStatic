const gdprPopup = document.getElementById("gdprPopup");
const gdprConfirmed = document.cookie.includes("GDPRConfirmed=true");

function confirmGDPR() {
  gdprPopup.classList.remove("showPopup");
  document.cookie = "GDPRConfirmed=true; path=/;";
}

if (!gdprConfirmed) gdprPopup.classList.toggle("showPopup");
