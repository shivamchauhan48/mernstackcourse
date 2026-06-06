let bookNowButton = document.querySelector("#bookNowButton");
let inputFullName = document.querySelector("#inputFullName");
let inputEmail = document.querySelector("#inputEmail");
let inputPhone = document.querySelector("#inputPhone");

let refreshHandler = () => {
  let buttonAfterServices = document.querySelectorAll(".buttonAfterServices");
  console.log(buttonAfterServices);
  let buttonAfterServicesArray = [...buttonAfterServices];
  buttonAfterServicesArray.map((element) => {
    console.log(element);
    element.textContent = "Add Item";
    element.className = "add_item";
  });
  let tablebody = document.querySelector("#tablebody");
  let allRows = tablebody.querySelectorAll("tr");
  let allRowsArray = [...allRows];
  console.log(allRowsArray);
  allRowsArray.map((element) => {
    element.remove();
  });
  let totalAmount = document.querySelector("#totalAmount");
  totalAmount.textContent = "0";
};

//bookNowButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   console.log(inputFullName.value, inputEmail.value, inputPhone.value);
//   if (
//     inputFullName.value == "" ||
//     inputEmail.value == "" ||
//     inputPhone.value == ""
//   ) {
//     console.log("Empty Fields");
//     window.alert("Enter Values First...");
//   } else {
//     console.log("sent");
//     let lineafterbook = document.querySelector("#lineafterbook");
//     lineafterbook.style = "display:block";
//     refreshHandler();
//   }
// });
/*if (setbook == true) {
  let lineafterbook = document.querySelector("#lineafterbook");
  lineafterbook.style = "display:block";
}*/
let bookleft = document.querySelector("#bookleft");
let ptag = bookleft.querySelector("p");
console.log(bookleft, ptag);

document.getElementById("bookbuttoninleftdiv").addEventListener("click", () => {
  const bookservicesection = document.getElementById("bookservicesection");
  bookservicesection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

let bookserviceForm = document.getElementById("bookserviceForm");
bookserviceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    inputFullName.value != "" &&
    inputEmail.value != "" &&
    inputPhone.value != ""
  ) {
    console.log("clicked");
    let lineafterbook = document.querySelector("#lineafterbook");
    lineafterbook.style = "display:block";
    refreshHandler();
  }
});

let newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
