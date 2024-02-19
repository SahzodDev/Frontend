


// and: &&
console.log( true && true); // returns true

console.log (false && true); // returns false

// falsy and truthy
console.log(0 && 1); // returns 0

// truthy and truthy
console.log(3 && 4); // returns the value on the right hand side

// falsy && truthy
console.log('' && 4); // returns the value of the falsy

if ("" && 4) {
    console.log("*****"); // logical expression returns false, thus the code inside the block is never readen.
}

let error = true;
error && console.log("There was an error."); // değişkenin değerine bağlı olarak konsola yazı yazılıyor.

// or: ||

console.log(true || true); // true

console.log(true || false); // true

console.log(false || true); // true

console.log(false || false); // false

// truthy || truthy
console.log("abc" || 3); // returns the left hand side value

// falsy || truthy
console.log(0 ||1); // returns the value of the truthy


// not: !
const isRainy = false;
console.log(!''); // returns true
console.log(!3); // returns false


if (!isRainy) {
    console.log("Happy days...");
}