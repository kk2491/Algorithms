"use strict";

const linearSearch = (searchNumber, inputArray) => {
  try {
    let numberIndex = -1;

    for (let i = 0; i < inputArray.length; i++) {
      if (searchNumber == inputArray[i]) {
        numberIndex = i;
        break;
      }
    }

    return numberIndex;
  } catch (err) {
    console.log("linearSearch error : ", err);
    return -1;
  }
};

const linearSearchAsync = (searchNumber, inputArray) => {
  try {
    let numberIndex = -1;

    for (let i = 0; i < inputArray.length; i++) {
      if (searchNumber == inputArray[i]) {
        numberIndex = i;
        break;
      }
    }

    return numberIndex;
  } catch (err) {
    console.log("linearSearch error : ", err);
    return -1;
  }
};

let searchNumber = 3;
let inputArray = [1, 3, 10, 19, 19];
let numberIndex = linearSearch(searchNumber, inputArray);
console.log("numberIndex : ", numberIndex);
