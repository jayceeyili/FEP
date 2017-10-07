/***************************************************************************************************
  Given an array of positive integers and a target number, return true if a sum of contiguous values
  within the array matches the target number (Facebook)
***************************************************************************************************/

const matchTarget = (array, target) => {
  // naive solotion
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === target) return true;
  //   let sum = array[i];
  //   for (let k = i + 1; k < array.length; k++) {
  //     let curr = array[k];
  //     sum += curr;
  //     if (sum === target) return true;
  //   }
  // }
  //
  // return false;

  
}

let a = [1, 11, 2, 4, 5, 7];
let t = 30;
console.log(matchTarget(a, t));

/***************************************************************************************************
  1, Given a list of characters, write a function that outputs one palindrome that can be made using
  ALL of the input characters once
  2, Output all palindrome combinations (Uber)
***************************************************************************************************/


/***************************************************************************************************
  implement: firstServer(serverArray) {}
  input: serverArray is an array of integer server numbers (all different) > 0
  Return the server ID of the first positive integer not in the list (Stripe)
***************************************************************************************************/
