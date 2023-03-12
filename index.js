// #1 Turning Strings to URLs
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"

function urlConverter(input) {
  if (typeof input === "string") {
    const url = input.split(' ').join("%20");
    return url;
  }
}

// #2 Array Deduping 
// Input: [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]

function deduping(array) {
  const newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

// #3 Compressing Strings
// Input: "aaabccdddda"
// Output: "3ab2c4da"

function compressStrings(string) {
  let compressedStr = "";
  let count = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i-1]) {
      count++;
    } else {
      compressedStr += count + string[i-1];
    }
  }
  compressedStr += count + string[string.length-1];
  return compressedStr;
}

// #4 Checking for Uniqueness
// Input: "hello"
// Output: false
// Input: "copyright"
// Output: true

function isUnique(string) {
  const length = string.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (string[j] === string[j+1]) {
        return false
      } 
    }
  }
  return true;
}

// #5 Array sorting 
// Input: [9, 2, 7, 12]
// Output: [2, 7, 9, 12]

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array [j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      } 
    }
  }
  return array;
}
