const email = document.getElementsByClassName("email").value;
console.log(email);

const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "X-MailerLite-ApiDocs": "true",
    "Content-Type": "application/json",
    "X-MailerLite-ApiKey": "d614768f8a31b34b6e41895c65a8fe9b",
  },
  body: JSON.stringify({
    email: "pliupelis@inbox.lt",
    resubscribe: true,
    autoresponders: true,
    type: "null",
  }),
};

fetch("https://api.mailerlite.com/api/v2/groups/108527287/subscribers", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
