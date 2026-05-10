let arr = [1, 2, 31, 4, 5, 6];

const maxNum = (array) => {
  console.log(array);
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log("Maximum Number in Arrary is ", max);
};

const sumArr = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log("Sum of Array is ", sum);
};

const oddInArr = (array) => {
let oddNum = 0;
let evenNum = 0;
for(let i =0 ;i <array.length;i++){
    if(array[i]%2==0){
        evenNum = evenNum +1;
    }
    else{
        oddNum = oddNum + 1;
    }
}
console.log("Number of odd elements is", oddNum);

};

maxNum(arr);
sumArr(arr);
oddInArr(arr);
