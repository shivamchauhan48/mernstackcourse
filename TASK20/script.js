let leftdiv = document.getElementById("leftdiv");
let heading1inleftdiv = document.createElement("h1");
//heading1inleftdiv.textContent="Revitalize Your Clothes with Expert Laundry Services!";

heading1inleftdiv.innerHTML =
  "<h2>Revitalize Your Clothes with Expert <span> Laundry Services!</span></h2>";
leftdiv.appendChild(heading1inleftdiv);

let parainleftdiv = document.createElement("p");
parainleftdiv.textContent =
  "From premium dry cleaning to swift wash and fold, we deliver care and convenience. Schedule a pickup and rediscover the freshness of your clothes today!";
leftdiv.appendChild(parainleftdiv);

let bookbuttoninleftdiv = document.createElement("button");
bookbuttoninleftdiv.textContent = "Book a service today";
bookbuttoninleftdiv.style = "width:20vw;background:lightblue";
leftdiv.appendChild(bookbuttoninleftdiv);

let rightdiv = document.getElementById("rightdiv");
let imginrightdiv = document.createElement("img");
imginrightdiv.src =
  "https://thumbs.dreamstime.com/b/cartoon-washing-machine-features-smiling-cheerful-character-peeking-out-drum-has-front-loading-door-open-colorful-359776478.jpg";
imginrightdiv.style = "width:25vw";
rightdiv.appendChild(imginrightdiv);

const totalHandler = (task, cost, element) => {
  //console.log(task, cost, element);
  let totalAmount = document.querySelector("#totalAmount");
  let totalAmountValue = parseInt(totalAmount.textContent);
  //console.log(totalAmountValue, cost);
  // console.log(parseInt(totalAmount.textContent));
  if (task == "add") {
    totalAmountValue = totalAmountValue + cost;
    totalAmount.textContent = totalAmountValue;
    element.textContent = "Remove Item";
  }
  if (task == "remove") {
    totalAmountValue = totalAmountValue - cost;
    totalAmount.textContent = totalAmountValue;
    element.textContent = "Add Item";
  }
};

let rowCounter = 0;
const addHandler = (arg1, arg2, element) => {
  //console.log("Element is", element.textContent);
  let tablebody = document.getElementById("tablebody");
  //console.log(arg1, arg2);
  let newRow = tablebody.insertRow();
  //newRow.id = rowCounter;
  //rowCounter++;
  //console.log(element.parentElement.id);
  newRow.id = element.parentElement.id + "row";
  let cellName = newRow.insertCell(0);
  let cellCost = newRow.insertCell(1);
  cellName.textContent = arg1;
  cellCost.textContent = arg2;
  totalHandler("add", arg2, element);
};

const removeHandler = (arg1, arg2, element) => {
  // console.log(arg1, arg2);
  // console.log(element.parentElement.id);
  totalHandler("remove", arg2, element);
  let idofrow = element.parentElement.id + "row";
  let rowToBeDeleted = document.getElementById(idofrow);
  // console.log(rowToBeDeleted);
  rowToBeDeleted.remove();
};

let buttoncollection = document.getElementsByClassName("buttonAfterServices");
//console.log(buttoncollection);

let buttonarray = [...buttoncollection];
//console.log(buttonarray);
buttonarray.map((element) => {
  element.addEventListener("click", () => {
    /*console.log(
      parseInt(element.parentElement.querySelector("span").innerText),
    );*/
    /* console.log(
      element.parentElement.querySelector(".servicename").textContent,
    );
    console.log(
      parseInt(
        element.parentElement.querySelector(".serviceprice").textContent,
      ),
    );*/
    let name = element.parentElement.querySelector(".servicename").textContent;
    let price = parseInt(
      element.parentElement.querySelector(".serviceprice").textContent,
    );
    // console.log(element.textContent);

    if (element.textContent == "Add Item") {
      addHandler(name, price, element);
    } else {
      removeHandler(name, price, element);
    }
  });
});
