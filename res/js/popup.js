const gdprPopup = document.getElementById("gdprPopup");
const gdprConfirmed = document.cookie.includes("GDPRConfirmed=true");

console.log(`GDPR Confirmed: ${gdprConfirmed}`);

if(!gdprConfirmed) 
    gdprPopup.classList.toggle("showPopup");


function confirmGDPR()
{
    gdprPopup.classList.remove("showPopup");
    document.cookie = "GDPRConfirmed=true; path=/";
}


