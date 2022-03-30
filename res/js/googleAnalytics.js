//recommendation: use connection code between <head> tags, however it would make code learner using it from external .js files
// TODO: check if external .js working properly, setup connection for permanent 3cubes gmail acc ga_id

// async src="https://www.googletagmanager.com/gtag/js?id=G-TJT88BEYNK"
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-TJT88BEYNK');

let ga_id = "G-TJT88BEYNK"; //andrius.pliupelis@edukraftas.lt
let ga_script = document.createElement("SCRIPT");

ga_script.type = "text/javascript";
ga_script.src = `https://www.googletagmanager.com/gtag/js?id=${ga_id}`;
let script2 = document.createElement("SCRIPT");

script2.type = "text/javascript";

script2.text = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${ga_id}');`;

document.body.appendChild(ga_script);
document.body.appendChild(script2);
