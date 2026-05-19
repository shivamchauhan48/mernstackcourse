let maindiv = document.createElement("div");
maindiv.id = "main";
let navdiv = document.createElement("div");
navdiv.id = "navdiv";
let contentdiv = document.createElement("div");
contentdiv.id = "contentdiv";
let checkoutdiv = document.createElement("div");
checkoutdiv.id = "checkoutdiv";
let servicediv = document.createElement("div");
servicediv.id = "servicediv";
let cartdiv = document.createElement("div");
cartdiv.id = "cartdiv";
let booknowdiv = document.createElement("div");
booknowdiv.id = "booknowdiv";

document.body.appendChild(maindiv);

maindiv.appendChild(navdiv);
maindiv.appendChild(contentdiv);

contentdiv.appendChild(checkoutdiv);
contentdiv.appendChild(servicediv);

checkoutdiv.appendChild(cartdiv);
checkoutdiv.appendChild(booknowdiv);

//navbar
let logodiv = document.createElement("div");
let navigationdiv = document.createElement("div");
let userdiv = document.createElement("div");

navdiv.appendChild(logodiv);
navdiv.appendChild(navigationdiv);
navdiv.appendChild(userdiv);

let logo = document.createElement("h1");
logo.innerText = "Logo";
logodiv.appendChild(logo);

let home = document.createElement("a");
home.href = "/home";
home.innerText = "Home";
navigationdiv.appendChild(home);
let services = document.createElement("a");
services.href = "/services";
services.innerText = "Services";
navigationdiv.appendChild(services);
let contactus = document.createElement("a");
contactus.href = "/contactus";
contactus.innerText = "ContactUs";
navigationdiv.appendChild(contactus);
let aboutus = document.createElement("a");
aboutus.href = "/about";
aboutus.innerText = "AboutUs";
navigationdiv.appendChild(aboutus);

let userName = document.createElement("h3");
userName.innerText = "userName";
userdiv.appendChild(userName);
let exitlogo = document.createElement("img");
exitlogo.appendChild(exitlogo);

//content section

let headingInServiceDiv = document.createElement("h1");
headingInServiceDiv.textContent = "Browse Our Services";

let paraInServiceDiv = document.createElement("p");
paraInServiceDiv.textContent =
  "Click on the add to cart button to add a service to your cart or press skip";

let arrayOfCards = [
  { service: "Stain Removal", price: 300, imgLink: "" },
  {},
  {},
];
