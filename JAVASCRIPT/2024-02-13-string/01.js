



const userName = "Burak";

const favoriteColor = "Blue";


// string properties
const userNameLength = userName.length;

console.log(userNameLength);

console.log(userName[0]); // index nuamrasıyla harfe ulaşılabiliyor.

userName[0] = "C"; // primitives are immutable.

console.log(userName);

// *** string method ***


// trim() // string'in başı ve sonundaki boşlukları atar ve string'i geri döner.

const userInput = "  burak   ";

console.log(userInput.trim()); // **trim metodu string değişkenin değerini değiştirmez.

const userInputTrimmed = userInput.trim();

// toUpperCase()
const rightAnswer = "ANKARA";
const userAnswer = "Ankara";

if (rightAnswer.toUpperCase() === userAnswer.toUpperCase()) {
    console.log("tebrikler");
}

// toLocaleUpperCase

console.log("istanbul".toUpperCase());
console.log("istanbul".toLocaleUpperCase("tr")); // non-latin karakter varsa lokal metodu kullanılabilir.

// toLowerCase()
if (rightAnswer.toLowerCase() === userAnswer.toLowerCase()) {
    console.log("tebrikler");
}

// toLocaleLowerCase()
console.log("ISPARTA".toLowerCase());
console.log("ISPARTA".toLocaleLowerCase("tr"));

// primitives are immutable. kullanılan metodlar yeni değerler döner, mevcut değişke ndeğerini etkilemez.

// includes
const userMessage = "Lorem ipsum dolor sit amet...";
const bannedWord = "ipsum";

console.log(userMessage.includes(bannedWord));

if (!userMessage.includes(bannedWord)) {
    console.log("Mesajınız iletilecek.");
}

// index

console.log(userMessage.indexOf(bannedWord));

// lastIndexOf
const userMessage2 = "Lorem ipsum dolor sit amet consectetur...";

console.log(userMessage2.lastIndexOf(bannedWord));

// replace()
const userMessage3 = "Lorem ipsum dolor sit, consectetur adipiscing elit. Sed do eiusmod tempor. ipsum dolor consectetur.";

const modifiedUserMessage = userMessage3.replace(bannedWord, "****");

console.log(modifiedUserMessage, userMessage3); // primitives are immutable.

// replaceAll()

const modifiedUserMessage2 = userMessage3.replaceAll(bannedWord, "****");

console.log(modifiedUserMessage2);

// slice()
const myCake = "Karamelli cheesecake";

const slice1 = myCake.slice(0, 7);

const slice2 = myCake.slice(0); // sadece başlangıç parametresi verilirse, başından sonuna kadar hepsinin slice'ını alır.

const slice3 = myCake.slice(-4); // sondan ilk dört karakteri alır.

const slice4 = myCake.slice(-10, -4);

console.log(slice4);

console.log(slice3);

console.log(slice1, myCake);

// split()

const seasonsStr = "winter, summer, spring, fall";

const arrFromStr = seasonsStr.split(", ");

console.log(arrFromStr, typeof seasonsStr); // ***primitives are immutable.

/* regex - regular expressions */

const myTextStr = "Deneme test, bir iki üç, dört, deneme...";

console.log(myTextStr.replace(/Deneme/gi, ''));




