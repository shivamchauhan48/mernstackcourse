let inputId = document.getElementById("inputId");
let submitBtn = document.getElementById("submitBtn");

//console.log(inputValue, submitBtn, inputValue.value);

const sumOfDigits = (inVal) => {
  // let inputValue = inputId.value;
  let num = inVal;
  let arr = [];
  while (num > 0) {
    let a = num % 10;

    arr.push(a);
    num = Math.floor(num / 10);
  }
  let sumarg = 0;
  for (let i = 0; i < arr.length; i++) {
    sumarg = sumarg + arr[i];
  }
  console.log("Sum is", sumarg);
  return arr;
};

const checkArm = (arrayarg, inputarg) => {
  //console.log("CHECKARMSTRoNG arguments are..", arrayarg, inputarg);
  let sumarg = 0;
  for (let i = 0; i < arrayarg.length; i++) {
    sumarg = sumarg + arrayarg[i] ** 3;
  }
  //console.log(sumarg, parseInt(inputarg));
  if (sumarg == inputarg) {
    console.log("YES !! It is a armstrong number.");
  } else {
    console.log("NO !! It is not a armstrong number.");
  }
};

const checkPrime = (inptnum) => {
  //console.log(Math.floor(Math.sqrt(inptnum)));
  if (inptnum == 0 || inptnum == 1) {
    console.log("Not a prime number");
  } else {
    for (let i = 2; i <= parseInt(Math.sqrt(inptnum)); i++) {
      if (inptnum % i == 0) {
        console.log("No not a prime number");
        return;
      }
    }
  }
  console.log("Yes it is prime");
};

const findFactors = (num) => {
  let arr = [1, num];
  let rootnum = Math.floor(Math.sqrt(num));
  //console.log(rootnum);
  let i = 2;
  while (i <= rootnum) {
    if (num == 0 || num == 1) {
      console.log("Input large number");
      break;
    } else if (num % i == 0) {
      let y = num / i;
      arr.push(y);
      arr.push(i);
      i++;
    } else {
      i++;
    }
  }

  let uniquearray = new Set(arr);
  console.log("Factors are ", uniquearray);
};

submitBtn.addEventListener("click", () => {
  let inputValue = parseInt(inputId.value);

  console.log("Sum of its digits:");
  let array = sumOfDigits(inputValue);
  //console.log(array);
  console.log("Is it a Armstrong Number:");
  checkArm(array, inputValue);
  console.log("Is it a prime number:");
  checkPrime(inputValue);
  findFactors(inputValue);
});
