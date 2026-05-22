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
exitlogo.src = "";
exitlogo.alt = "Exit Image not found";
userdiv.appendChild(exitlogo);

//content section

//CHECKOUT DIV

//Cart Div

let cartheaddiv = document.createElement("div");
let cartHeading = document.createElement("h2");
cartHeading.innerText = "Added Items";
cartheaddiv.appendChild(cartHeading);
cartdiv.appendChild(cartheaddiv);

let middiv = document.createElement("div");
cartdiv.appendChild(middiv);

let tablediv = document.createElement("div");
tablediv.innerHTML =
  "<h3>No items added</h3><p>Add items to the cart from the services bar</p>";
middiv.appendChild(tablediv);
const generateTable = () => {
  tablediv.innerHTML = `<table>
  <thead>
  <tr>
  <th>S No.</th>
  <th>Service Name</th>
  <th>Price ($)</th>
  </tr>
  </thead>
  
  <tbody id="table-body"></tbody>
  
  
  </table>`;
  middiv.appendChild(tablediv);
};
let totalDiv = document.createElement("div");
totalDiv.innerHTML = `<h3>Total Amount</h3> <h3 id="totalCost"> 0 </h3>`;
cartdiv.appendChild(totalDiv);

//BOOK NOW DIV

let headingInBookNow = document.createElement("h3");
headingInBookNow.innerText = "Book Now";
let inputSection = document.createElement("div");
inputSection.id = "inptSectiondiv";
inputSection.innerHTML = `<label for="id">Full Name</label>
    <input type="text" id="name">
    <label for="email">Email ID</label>
    <input type="text">
    <label for="number">Phone Number</label>
    <input type="number"></input>`;
let booknowButton = document.createElement("button");
booknowButton.innerText = "Book Now";
booknowButton.disabled = true;

booknowdiv.appendChild(headingInBookNow);
booknowdiv.appendChild(inputSection);
booknowdiv.appendChild(booknowButton);

// Service Section
let headingInServiceDiv = document.createElement("h1");
headingInServiceDiv.textContent = "Browse Our Services";
servicediv.appendChild(headingInServiceDiv);
let paraInServiceDiv = document.createElement("p");
paraInServiceDiv.textContent =
  "Click on the Add Item button to add a service to your cart or press Skip Item";
servicediv.appendChild(paraInServiceDiv);
let arrayOfCards = [
  {
    service: "Stain Removal",
    price: 300,
    imgLink:
      "https://mackmaids.com/wp-content/uploads/2018/06/The-Ultimate-Stain-Removal-List-Stains-S-Through-Z-1024x683.jpg",
  },
  {
    service: "Dry Cleaning",
    price: 400,
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6_k-Drvi-tWu9A_yAcfW5SobRIOAX8coPQ&s",
  },
  {
    service: "Leather and Suede Cleaning",
    price: 300,
    imgLink:
      "https://hips.hearstapps.com/hmg-prod/images/how-to-clean-leather-65d351376ce8d.jpg?resize=980:*",
  },
  {
    service: "Clean and Fold",
    price: 500,
    imgLink:
      "https://www.sourceoffabric.com/wp-content/uploads/2024/09/Woman-giving-away-washed-and-folded-clothing-1024x683.jpg",
  },
  {
    service: "Ironing",
    price: 50,
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolikaiadRwYf1-GmqFtDWiEtqUaRHEmEK0w&s",
  },
];

let index = 0;
console.log(arrayOfCards[index]);

let carddiv = document.createElement("div");
carddiv.innerHTML = `<img src=${arrayOfCards[index].imgLink} alt="Image of"${arrayOfCards[index].service}  style="width: 200px; height: 150px" ><h2>${arrayOfCards[index].service}</h2>
<h2>${arrayOfCards[index].price}</h2>`;
servicediv.appendChild(carddiv);

let totalCostdiv = document.getElementById("totalCost");

let totalCostValue = parseInt(totalCostdiv.textContent);

let serialnum = 1;

if (index == 0) {
}

const addHandler = () => {
  if (index == 0) {
    generateTable();
  }
  booknowButton.disabled = false;
  //arrayOfCards[index] && console.log(arrayOfCards[index].service, arrayOfCards[index].price);
  //adding to the table
  let tbody = document.getElementById("table-body");
  let newRow = tbody.insertRow();
  const cellSno = newRow.insertCell(0);
  const cellName = newRow.insertCell(1);
  const cellPrice = newRow.insertCell(2);

  cellSno.textContent = serialnum;
  cellName.textContent = arrayOfCards[index].service;
  cellPrice.textContent = arrayOfCards[index].price;
  serialnum++;
  totalCostValue = totalCostValue + parseInt(arrayOfCards[index].price);
  //console.log(totalCostValue);
  totalCostdiv.textContent = totalCostValue;
};

const changeHandler = () => {
  index = index + 1;
  console.log(index);
  if (index < arrayOfCards.length) {
    console.log(arrayOfCards[index]);
    // carddiv.innerHTML = `<h2>${arrayOfCards[index].service}</h2>
    // <h2>${arrayOfCards[index].price}</h2>`;
    carddiv.innerHTML = `<img src=${arrayOfCards[index].imgLink} alt="Image of"${arrayOfCards[index].service}  style="width: 200px; height: 150px" ><h2>${arrayOfCards[index].service}</h2>
<h2>${arrayOfCards[index].price}</h2>`;
  }
};
let buttoninServiceDiv = document.createElement("div");
servicediv.appendChild(buttoninServiceDiv);

let skipitembutton = document.createElement("button");
skipitembutton.innerText = "Skip Item";
skipitembutton.addEventListener("click", () => {
  if (index < arrayOfCards.length) {
    changeHandler();
  } else {
    skipitembutton.disabled = true;
  }
});
buttoninServiceDiv.appendChild(skipitembutton);

let additembutton = document.createElement("button");
additembutton.innerText = "Add Item";
additembutton.addEventListener("click", () => {
  if (arrayOfCards[index] != undefined) {
    console.log("Current card is", arrayOfCards[index]);
    addHandler();
    changeHandler();
  } else {
    additembutton.disabled = true;
  }
});
buttoninServiceDiv.appendChild(additembutton);

let linebelowCard = document.createElement("p");
linebelowCard.textContent = "Add the items the cart and book now";
servicediv.appendChild(linebelowCard);
