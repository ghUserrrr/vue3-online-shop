"use strict";

let arr = [];

let obj = {
  one: 1,
};

arr.push({ ...obj });

console.log(arr[0] === obj);
console.log(arr);
console.log(obj);

// arr.push(Object.assign({}, [obj]));

// console.log(arr[0][0].one);
// console.log(arr[0][0].one === obj.one);
