/**
  
    SyntaxError: Cannot declare a let variable twice:

    let userId = 12;

    let userId = 14;
 */


/* variable declaration without initializing */
let userName;


let userBasketTotal = 5250;

userBasketTotal = 3250;

{
    let blockInner = 545; /* let is block scoped */
}

console.log(blockInner); // block scope'un içerisindeki değişikene bloğun dışından erişilemez.

/*
    1- declaration without initializing -ok
    2- declaration with the same identifier name -nopt allowed
    3- reassignment -ok
    4- block scoped or not - (let is block scoped)
*/
