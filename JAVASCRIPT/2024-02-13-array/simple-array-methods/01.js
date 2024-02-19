



const arr1 = ["Monday", "Wednesday"];

/* push */

const newArrLength = arr1.push("Saturday", "Sunday");

console.log(arr1); // push method, mutates the original array.

/* pop */

const arr2 = [1,2,3,4, 12];

const poppedArr2 = arr2.pop(); // pop method mutates the original array and returns the popped element.

console.log(poppedArr2, arr2);



/* shift */

const arr3 = [34, 56, 78, 90];

const shiftedArr3Item = arr3.shift();

console.log(shiftedArr3Item);

/* unshift */

const arr4 = [45, 67, 96, 57];

const newArr4Length = arr4.unshift("a");

console.log(newArr4Length, arr4);


/* concat */

const arr5 = ["a", "b", "c"];
const arr6 = [4, 7, 8];

const alphaNumericArr = arr5.concat(arr6); // does not mutate the original array, returns a new array that has the combination of the original arrays.
console.log(arr5.concat(arr6), arr5, arr6);

/* includes */

const arr7 = ["x", "m", "o"];

const hasM = arr7.includes("m");

console.log(hasM);

/* indexOf */

console.log(arr7.indexOf("m"));

/* lastIndexOf */

console.log(arr7.lastIndexOf("o"));

/* reverse */

const arr8 = ["a", "b", "c", "d"];

console.log(arr8.reverse() === arr8); // mutates the original array and reverses the lineup of the elements.

/* join */

const arr9 = ["banana", "orange", "apple", "leman"];

const  joinedStr = arr9.join("***");

console.log(joinedStr, typeof joinedStr);

/* slice (array'den dilimler almak için kullanılabilir) */

const mixedCake = ["apple", "orange", "lemon", "chocolate", "cherry"];

const slice1 = mixedCake.slice(0, 2); // apple and orange.

console.log(slice1, mixedCake); // no mutation

const slice2 = mixedCake.slice(2);

const slice3 = mixedCake.slice(-4, -2);

const slice = mixedCake.slice(-4);

/* splice */

const arr10 = [1, 14, "b", 24, "a"];

const removedNums = arr10.splice(0, 2)
console.log(arr10, removedNums); // mutates the original array.

const replacedNumbers = arr10.splice(0, 2, "x"); // çıkardığı elemanların yerine verilen 3. parametredeki elemanı ekliyor.

console.log(arr10);






