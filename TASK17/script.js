const innerFunction = (num1, num2) => {
  let result = new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Second Number is zero");
    } else {
      //console.log(num1 / num2);
      resolve(num1 / num2);
    }
  });
  return result;
};

const division = async (num1, num2) => {
  console.log("function division called with numbers-", num1, num2);
  try {
    let output = await innerFunction(num1, num2);
    console.log(output);
  } catch (err) {
    console.log(err);
  }
};

division(50, 10);
division(25, 0);
division(10,10);
division(30,2);
division(0,0);
