"use strict";

// Note: Not being used currently
const isSortedArray = (inputArray) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < inputArray.length; i++) {
      if (i == 0) {
        continue;
      }

      if (inputArray[i - 1] > inputArray[i]) {
        reject(false);
      }
    }

    resolve(true);
  });
};

const binarySearch = (searchNumber, inputArray) => {
  try {
    for (let i = 0; i < inputArray.length; i++) {
      if (i == 0) {
        continue;
      } else {
        if (inputArray[i - 1] > inputArray[i]) {
          throw "Array is not sorted in ascending order";
        }
      }
    }

    let numberIndex = -1;
    let startIndex = 0;
    let endIndex = inputArray.length;

    while (startIndex <= endIndex) {
      let searchIndex = Math.floor((startIndex + endIndex) / 2);

      if (searchNumber == inputArray[searchIndex]) {
        numberIndex = searchIndex;
        break;
      } else if (searchNumber > inputArray[searchIndex]) {
        startIndex = searchIndex + 1;
        endIndex = inputArray.length;
      } else {
        startIndex = 0;
        endIndex = searchIndex - 1;
      }
    }

    return numberIndex;
  } catch (err) {
    console.log("binarySearch error : ", err);
  }
};

let inputArray = [1, 3, 4, 11, 13];
let searchNumber = 13;

let numberIndex = binarySearch(searchNumber, inputArray);
console.log("numberIndex : ", numberIndex);
