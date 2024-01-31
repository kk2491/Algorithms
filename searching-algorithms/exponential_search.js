"use strict";

const binarySearch = (searchNumber, inputArray, startIndex, endIndex) => {
  try {
    let numberIndex = -1;

    while (startIndex <= endIndex) {
      let searchIndex = Math.floor((startIndex + endIndex) / 2);

      if (searchNumber == inputArray[searchIndex]) {
        numberIndex = searchIndex;
        break;
      } else if (searchNumber > inputArray[searchIndex]) {
        startIndex = searchIndex + 1;
        endIndex = endIndex;
      } else {
        startIndex = startIndex;
        endIndex = searchIndex - 1;
      }
    }

    return numberIndex;
  } catch (err) {
    console.log("binarySearch error : ", err);
  }
};

const exponentialSearch = (searchNumber, inputArray) => {
  try {
    console.log("exponentialSearch");
    let numberIndex = -1;
    let searchIndex = 1;
    let prevIndex = 0;

    if (searchNumber == inputArray[0]) {
      return 0;
    }

    while (true) {
      if (searchNumber == inputArray[searchIndex]) {
        numberIndex = searchIndex;
        break;
      } else if (searchNumber > inputArray[searchIndex]) {
        console.log("here");
        prevIndex = searchIndex;
        searchIndex = searchIndex * 2;
        searchIndex = Math.min(searchIndex, inputArray.length - 1);

        if (searchIndex == prevIndex) {
          break;
        }
      } else {
        numberIndex = binarySearch(searchNumber, inputArray, searchIndex / 2, searchIndex);
      }
    }

    return numberIndex;
  } catch (err) {
    console.log("exponentialSearch error : ", err);
  }
};

let inputArray = [1, 3, 4, 11, 13];
let searchNumber = 13;

let numberIndex = exponentialSearch(searchNumber, inputArray);
console.log("numberIndex : ", numberIndex);
