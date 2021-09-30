// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// 7 kyu

function squareDigits(num) {
  newNum = num.toString();
  let stringNum = [];
  for (let i = 0; i < newNum.length; i++) {
    stringNum.push(newNum[i] ** 2);
  }
  return Number(stringNum.join(""));
}