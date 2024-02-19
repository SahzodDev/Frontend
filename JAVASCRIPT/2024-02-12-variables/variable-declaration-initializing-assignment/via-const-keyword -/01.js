

/*

can not be declared without initializing. 

const Pi;

*/

/*

 can not be declared twice( with the same identifier name)

const Pi = 3.1415;

const Pi = 4;
*/

/*
const Pi = 3.1415;
Pi = 3.2;
*/

{
    const goldenRatio = 1.618;
}

console.log(goldenRatio) // scoped const değer globale geçemiyor.


/*
    1- declaration without initializing -not allowed
    2- declaration with the same identifier name -not allowed
    3- reassignment -not allowed (readonly)
    4- block scoped or not - (let is block scoped)
*/