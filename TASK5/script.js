let button = document.querySelector("button");

let yearInput = document.querySelector("#yearinput");


button.addEventListener("click", function () {
  console.log("Clicked");
  console.log(yearInput.value);
  let P=1000;
  let R = 10/100;
  let N=4;
  let T= yearInput.value;
  let rest = (1+(R/N))**(N*T);
  let A=P*rest;
  console.log(`The compound interest after ${T} is `,A,rest);
});
