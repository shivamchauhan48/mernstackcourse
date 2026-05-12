let data = [
  { name: "karan", marks: 80, class: "9th", address: "delhi" },
  { name: "sameer", marks: 50, class: "10th", address: "noida" },
  { name: "rony", marks: 90, class: "9th", address: "meerut" },
];

let main = document.getElementById("main");

let search = document.getElementById("search");

let input = document.createElement("input");
search.appendChild(input);

let inputbtn = document.createElement("button");

inputbtn.innerText = "Click";
search.appendChild(inputbtn);
let searchAddress = "";
inputbtn.addEventListener("click", () => {
  // console.log("Clicked", input.value, "--");
  searchAddress = input.value;
  displayFunction();
});

const displayFunction = () => {
  if (searchAddress == "") {
    data.map((element) => {
      // console.log(element);
      // console.log(element.name);
      // console.log(element.class);
      let newnode = document.createElement("div");
      newnode.innerHTML = `<div class="card">
      <h2>${element.name}</h2>
      <h3>Class:${element.class}</h3>
      <h3>Marks:${element.marks}</h3>
      <h3>Address:${element.address}</h3>
      </div>
      `;

      main.appendChild(newnode);
    });
  } else {
    let flag = false;
    main.innerHTML = "";
    data.map((element) => {
      // console.log(element.address, searchAddress);
      if (element.address == searchAddress) {
        flag = true;
        console.log(element);
        console.log(element.name);
        console.log(element.class);
        let newnode = document.createElement("div");
        newnode.innerHTML = `<div class="card">
        <h2>${element.name}</h2>
        <h3>Class:${element.class}</h3>
        <h3>Marks:${element.marks}</h3>
        <h3>Address:${element.address}</h3>
        </div>
        `;
        main.appendChild(newnode);
      }
    });
    if (!flag) {
      console.log("No match found....");
    }
  }
};

window.addEventListener("load", () => {
  displayFunction();
});
