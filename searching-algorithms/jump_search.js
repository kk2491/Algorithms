"use strict";

const jumpSearch = (searchNumber, inputArray) => {
  try {
    console.log("jumpSearch");

    for (let i = 0; i < inputArray.length; i++) {
      if (i == 0) {
        continue;
      } else {
        if (inputArray[i - 1] > inputArray[i]) {
          throw "Array is not sorted in ascending order";
        }
      }
    }

    let jumpSize = Math.floor(Math.sqrt(inputArray.length));
    let initIndex = 0;
    let searchIndex = jumpSize - 1;
    let numberIndex = -1;

    while (true) {
      if (searchNumber > inputArray[searchIndex]) {
        initIndex = searchIndex;
        searchIndex = searchIndex + jumpSize;
        searchIndex = Math.min(searchIndex, inputArray.length - 1);

        if (searchIndex == initIndex) {
          break;
        }

        console.log("initIndex : ", initIndex);
        console.log("searchIndex : ", searchIndex);
      } else {
        for (let j = initIndex; j < searchIndex + 1; j++) {
          if (inputArray[j] == searchNumber) {
            numberIndex = j;
            break;
          }
        }

        break;
      }
    }

    return numberIndex;
  } catch (err) {
    console.log("jumpSearch error : ", err);
  }
};

let inputArray = [11, 3, 4, 11, 13];
let searchNumber = 13;

let numberIndex = jumpSearch(searchNumber, inputArray);
console.log("numberIndex : ", numberIndex);
