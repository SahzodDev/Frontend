



// Object Literal

const myCar = {
    /* key: value */
    color: "gray", // property
    doorCount: 5, // property
    accelarate: function(){console.log("I am speeding up!!!");}, // method
    sayCarColor: function(){console.log("My color is " + this.color)},
}

// in javascript, standalone functions are called functions whilst functions written inside of an object are called methods.

// accessing the key values

// dot notation

const myCarColor = myCar.color;
const doorCount = myCar.doorCount;

myCar.accelarate();
myCar.sayCarColor();


// square bracket notation

const hero = {
    costumeColor: "red", 
    hasSuperPowers: true,
    name: "Spider-Man",
    sayName: function(){
        console.log("I am the " + this.name + "of Notingham.."); // implicit return undefined dönüyor.
    }
};

const costumeColor = hero["red"];
const hasSuperPowers = hero["hasSuperPowers"];
const sentence = hero["sayName"]();

hero["has" + "SuperPowers"];




const user = {
    userName: "Burak",
    id: 17,
    isRegistered: false,
}

/*
const userName = user.userName;
const id = user.id;
const isRegistered = user.isRegistered;
*/

// *** DESTRUCTURING ***

const {userName, id, isRegistered} = user; // sıranın önemi yok, key adı ile alıyoruz.

console.log(userName, id, isRegistered);



// *** Mutation The Object by changing a key's value ***

const product = {
    id: 14,
    title: "Hp Laptop",
    stockCount: 14,
}

product.stockCount = (product.stockCount - 1); // dot notation

product["stockCount"] = product.stockCount - 1; // square bracket notation.

console.log(product.stockCount);

/* Being referenced typed */

const aObj = { id: 14, color: "red", shape: "square"};

const bObj = aObj;

aObj.color = "blue";

bObj.color = "purple";

console.log(aObj.color);






