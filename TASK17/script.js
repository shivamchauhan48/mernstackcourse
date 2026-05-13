const innerFunction = (num1, num2) => {
  let result = new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Second Number is zero");
    } else {
      console.log(num1 / num2);
      resolve(num1 / num2);
    }
  });
  return result;
};

async function division() {
  console.log("function division");
  try {
    let output = await innerFunction(50, 0);
    console.log(output);
  } catch (err) {
    console.log(err);
  }
}

division();
