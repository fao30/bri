// function ArrayAdditionI(arr) {
//   let max = -100000;
//   let sum = 0;
//   arr.forEach((e) => {
//     if (max < e) max = e;
//   });
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], max);
//     if (arr[i] != max) {
//       sum += arr[i];
//       console.log(sum, "HASIL");
//     }
//   }
//   console.log(sum, max);
//   if (sum == max) return true;
//   else return false;
// }

// // keep this function call here

// // let input = [5, 7, 16, 1, 2];
// // let input = [4, 6, 23, 10, 1, 3];
// let input = [3, 5, -1, 8, 15];
// // Output: false
// // Input: [3,5,-1,8,12]
// // Output: true
// console.log(ArrayAdditionI(input));

// function LargestFour(arr) {
//   let sorting = arr.sort().reverse();
//   let getfour = sorting.filter((e, i) => i < 4);
//   let sum = 0;
//   for (let i = 0; i < getfour.length; i++) {
//     sum += getfour[i];
//   }
//   console.log(sum);
// }

// Examples;
// let input = [1, 1, 1, -5];
// Output: -2;
// let input = [0, 0, 2, 3, 7, 1];
// Output: 13;

// console.log(LargestFour(input));

// function SumMultiplier(arr) {
//   // code goes here
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   sum *= 2;

//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[j] * arr[k] >= sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// // let input = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
// // let input = [2, 2, 2, 2, 4, 1];
// let input = [1, 1, 2, 10, 3, 1, 12];
// console.log(SumMultiplier(input));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// function isValid(s) {
//   let sep = s.split("").sort();
//   console.log(sep);
//   let library = ["(", ")", "{", "}", "[", "]"];
//   let flag = false;
//   for (let i = 0; i < sep.length; i += 2) {
//     flag = false;
//     for (let j = 0; j < library.length; j++) {
//       if (sep[i] == library[j]) {
//         if (sep[i + 1] == library[j + 1]) {
//           flag = true;
//         }
//       }
//     }
//     if (!flag) return false;
//   }
//   return true;
// }

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.
// Example 2:

// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
// Example 3:

// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

// // console.log(isValid("{[]}"));
// console.log(isValid("([)]"));
// console.log(isValid("()[]{}"));
