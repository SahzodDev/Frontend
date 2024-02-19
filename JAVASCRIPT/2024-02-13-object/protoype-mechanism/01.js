



const user1 = {
    id: 17,
    isRegistered: false,
    sayId: function(){console.log(this.id)},
}

user1.id;
user1.sayId();

// user1["id"];
// user1["sayId"]();

console.log(user1.toString());

console.log(user1);

// prototype chain

console.log(user1.__proto__);

console.log(Object.getPrototypeOf(user1)); // bir objenin prototipine bakmak için en crossover yöntem.

console.log(user1.__proto__.__proto__);

const nD = new Date();

console.log(nD.__proto__.__proto__.__proto__); // prototype zinciri. 

// inheritance kavramı js'de prottoype mantığı sayesinde çalışır.

console.log(user1.hasOwnProperty("toString")); // bir objenin sahip olduğu bir özelliğin kendi üzerinden mi yoksa prototipinden mi geldiğini bu metod ile kontrol edebiliriz.

const myName = "Burak";

console.log(myName.__proto__._proto__.__proto__);







