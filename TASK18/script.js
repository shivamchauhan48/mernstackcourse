let head = document.createElement("header");
head.classList.add("MainHeading");
head.innerHTML = " <h2>Hello</h2> ";
document.body.appendChild(head);

let boxSection = document.createElement("div");
let userInputSection = document.createElement("div");

boxSection.innerHTML =
  "<span class='borderBox' id='red'>Red</span> <span class='borderBox' id='blue'>Blue</span> <span class='borderBox' id='green'>Green</span> <span class='borderBox' id='yellow'>Yellow</span>";
document.body.appendChild(boxSection);

/*let spanselection = document.querySelectorAll("span");
console.log(spanselection);
let spanarray = [...spanselection];
spanarray.map((element)=>{
    console.log(element);
})
 
const colourChangeHandler =  (color) =>{
console.log(color);
}
*/
let boxgroup = document.getElementsByClassName("borderBox");

//console.log([...boxgroup]);
[...boxgroup].map((element) => {
 // console.log(element, element.textContent.toLowerCase());
  element.addEventListener("click", () => {
    element.style.backgroundColor = element.textContent.toLowerCase();
  });
});

let inputdiv = document.createElement("div");
document.body.appendChild(inputdiv);
inputdiv.classList.add("inptdiv");

let input = document.createElement("input");
inputdiv.appendChild(input);

let inptsubmitbutton = document.createElement("button");
inptsubmitbutton.innerText = "Submit";
inptsubmitbutton.addEventListener("click", () => {
  console.log("Clicked with value", input.value);
  head.innerHTML = `<h2>Hello, ${input.value}</h2>`;
});
document.body.appendChild(inptsubmitbutton);
