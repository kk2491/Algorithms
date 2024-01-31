"use strict";

const interpolationSearch = (searchNumber, inputArray) => {
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
    let endIndex = inputArray.length - 1;

    while (startIndex <= endIndex) {
      let searchIndex = Math.floor(
        ((endIndex - startIndex) * (searchNumber - inputArray[startIndex])) / (inputArray[endIndex] - inputArray[startIndex])
      );

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
    console.log("interpolationSearch error : ", err);
  }
};

let inputArray = [1, 3, 4, 11, 13];
let searchNumber = 13;

let numberIndex = interpolationSearch(searchNumber, inputArray);
console.log("numberIndex : ", numberIndex);
