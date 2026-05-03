let inputvalue = document.getElementById("inputNumber");
let btn = document.getElementById("submitbtn");

const submitHandler = () => {
  if (inputvalue.value % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
};

btn.addEventListener("click", submitHandler);
