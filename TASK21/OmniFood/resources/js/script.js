let howitworksbtn = document.getElementById("howitworksbtn");
let howitworkssection = document.getElementById("howsection");
let citiesbtn = document.getElementById("citiesbtn");
let citiessection = document.getElementById("citysection");
let signupbtn = document.getElementById("signupbtn");
let pricingsection = document.getElementById("pricingsection");
let allatags = document.getElementById("navbar").querySelectorAll("a");
let allatagsarray = [...allatags];
console.log("Hey");
console.log(allatagsarray);

allatagsarray.map((element) => {
  console.log(element);
  element.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked");
  });
});

howitworksbtn.addEventListener("click", () => {
  howitworkssection.scrollIntoView({ behavior: "smooth", block: "start" });
});

citiesbtn.addEventListener("click", () => {
  citiessection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

signupbtn.addEventListener("click", () => {
  pricingsection.scrollIntoView({ behavior: "smooth", block: "start" });
});

let menubtn = document.getElementById("menu-btn");
let nav = document.querySelector("nav");
console.log(nav);

menubtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menubtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
});
