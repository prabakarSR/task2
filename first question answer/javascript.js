// Anonymous function
let odd = function (...array) {
    let oddnum = array.filter((num) => num % 2 === 1);
    return oddnum;
}

console.log(odd(12, 33, 67, 90));

//IIFE function
((...array) => console.log(array.filter((num) => num % 2 === 1)))(12, 33, 67, 90)

// Anonymous function
let title = function (msg) {
    return msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
}

console.log(title("hello prabakar"));

//IIFE function
(function (msg){ 
    console.log(msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' '))
})("hello prabakar");

//Anonymous function
let sum = function (...arr) {
    const _ = require("lodash");
    let add = _.sum(arr);
    return add;
}
console.log(sum(10, 20, 67));

//IIFE function
(function (...arr){ 
   const _ = require("lodash");
    let add = _.sum(arr);
    console.log(add);
})(10, 20, 67);

//Anonymous function
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(findPrimes(20));

//IIFE function
(  
function(numArray){
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
             if (number % i === 0) return false; }
                        return true;  });
     console.log(numArray);
    })([1, 2, 3, 4, 5, 7, 9])
 
//Anonymous function
function palindrome(arr, n)
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
}
console.log(palindrome("madam"));

//IIFE function
(function (arr, n) {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})("prabakar");

//Anonymous function
function getMedian(num1,num2)
{
  let arr = num1.concat(num2);  
  arr.sort((a, b) => (a - b));
  let n = arr.length;
  if (n % 2 === 0) {
    return ((arr[n / 2] + arr[n / 2 - 1]) / 2);
  }
  else {
    return arr[Math.floor(n / 2)];
  }
}

//IIFE function
(function (num1, num2) {
  let arr = num1.concat(num2);
  arr.sort((a, b) => (a - b));
  let n = arr.length;
  if (n % 2 === 0) {
    console.log(((arr[n / 2] + arr[n / 2 - 1]) / 2));
  }
  else {
    console.log(arr[Math.floor(n / 2)]);
  }
})

//Anonymous function
function dupli(...arr) {
  let ans = [...new Set(arr)];
  return ans;
}

//IIFE function
(function (...arr) {
  let ans = [...new Set(arr)];
  console.log( ans);
})(2, 2, 2, 24);

//Anonymous function
function rotLeft(arr, rotations) {

const rotatedArray = arr.concat(); for (let i = 0; i < rotations; i++) {

const frontItem = rotatedArray.shift(); rotatedArray.push(frontItem);

} return rotatedArray;

}

//IIFE function
(function (arr, rotation) {
  const rotatedArray = arr.concat(); for (let i = 0; i < rotations; i++) {

const frontItem = rotatedArray.shift(); rotatedArray.push(frontItem);

} console,log (rotatedArray);
})