
/* variable declaration without initializing without a value */

var userName;

/* declaration and initializing */
var userId = 12;

/// JS IS A WEAKLY TYPED LANGUAGE ///

/* assigning a new value */
userId = "Burak"; // değişkenlerini başlatırken type yazma zorunluluğu yoktur. deklare edilen değişkene dinamik olarak farklı tipler atayabiliriz. 

console.log(userId);

/* can be redeclared with the same identifiert name */
var lastSeen = "two hours ago";

var lastSeen = "three hours ago";

var totalScore = 2000;


/* reassignment is ok */
totalScore = 3000;

totalScore = 4000;

/* global scope */


{
    /* block scope */
    var blockInner = "I am block inner...";
}

console.log(blockInner);

/* 
    1- declaration without initializing -ok
    2- declaration with the same identifier name -ok
    3- reassignment -ok
    4- block scoped or not (var is not block scoped)
*/



