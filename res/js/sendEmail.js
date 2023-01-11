document.addEventListener("DOMContentLoaded", function () {
  const URL = "https://utility-server.komandax.lt/Packages/RequestPackage";

  // let email = document.querySelector('input[type="email"]');
  let hashedEmail = "";
  let validated = false;
  let lesson = "";
  //default
  let language = "EN";

  //toggle SAMPLE page dialog
  const showButton = document.querySelectorAll("#showDialog");
  const favDialog = document.getElementById("favDialog");
  const outputBox = document.querySelector("output");
  // const selectEl = favDialog.querySelector("select");
  // const confirmBtn = favDialog.querySelector("#confirmBtn");

  // "Update details" button opens the <dialog> modally

  // "Favorite animal" input sets the value of the submit button
  // selectEl.addEventListener("change", (e) => {
  //   confirmBtn.value = selectEl.value;
  // });
  // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
  favDialog.addEventListener("close", () => {
    outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
  });

  showButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      let classListArr = [...new Set(btn.classList)];
      //setting lesson
      classListArr.forEach((c) => {
        if (c.toString() === "UA") lesson = "UA";
        if (c.toString() === "S13") lesson = "S13";
      });
      favDialog.showModal();
    });
  });

  //extracting language
  const selectEl = favDialog.querySelector("select");
  selectEl.addEventListener("change", (e) => {
    language = selectEl.value;
  });

  //Posting email to GoogleSheet
  submit = (e) => {
    console.log("e");
    //Encrypting email to secure emails
    validation();

    if (validated === true) {
      // emailEncryption(email.value);
      //DATA
      const data = {
        //Server doesnt accept it, for now sending raw email
        // email: hashedEmail,
        email: email.value,
        packageName: lesson + language,
        subscribeToNewsletter: false,
      };
      //POST Method
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((data) => {
          //200 POPUP
          // overlay.style.display = "flex";
          setTimeout(() => {
            // overlay.style.display = "none";
          }, 3000);
          //reset
          email.value = "";
          checkbox.checked = false;
        })
        .catch((error) => {
          // Errors are reported there
          console.log(error);
        });
    } else {
      validation();
    }
  };
  //using specific passpahrase to encrypt emails / UTF8 supported
  emailEncryption = (str) => {
    const passphrase = "slavaUkraine";
    return (hashedEmail = CryptoJS.AES.encrypt(str, passphrase).toString());
  };

  validation = () => {
    const email = document.querySelector("#email");
    const checkbox = document.querySelector("#checkbox");
    const box = document.querySelector("#valid-box");
    const required = document.querySelector("#valid-required");
    const symbols = document.querySelector("#valid-symbols");
    const regExp = /[“‘/$&\;]/g;
    const inputs = [email, checkbox];
    let msgArr = [];

    required.style.display = "none";
    box.style.display = "none";
    symbols.style.display = "none";

    inputs.map((input) => {
      if (email.value === "") msgArr.push("1");
      if (!checkbox.checked) msgArr.push("2");
      if (email.value.match(regExp)) msgArr.push("3");

      msgArr = [...new Set(msgArr)];
      if (msgArr.length === 0) {
        return (validated = true);
      }
    });
    msgArr.map((number) => {
      if (number === "1") required.style.display = "block";
      if (number === "2") box.style.display = "block";
      if (number === "3") symbols.style.display = "block";
    });
  };
});
