

// toplama - addition

const sum = 3 + 5;

// çıkartma - subtraction
const result = 5 - 3;

// bölme - division
const result2 = 12 / 3;

// çarpma - multiplication
const result4 = 3 * 5;

// kalan - remainde
const result5 = 13 % 2;

// power
const result6 = 3 ** 2;

console.log(result6);

let i = 0;

i = i + 1;

i++;



// CONCATANATION

const userBasketTotal = 2500;
const basketItemPrice = 1200;
const basketItem2Price = 1300;
const userName = "Burak";
const dayToday = "Pazartesi";

const message1 = "Merhaba sayın" + " " + userName + " " + "Bugün günlerden" + " " + dayToday + ".";

console.log(message1);


/* type coercion (zorlamak) */
const message2 = "Almış olduğunuz ürünlerin toplamı:" + " " + (basketItem2Price + basketItemPrice);

const message3 = "Hello" +  3 * 5; // işlem önceliği devrede.

console.log(message2, message3);

// TEMPLATE STRING LITERALS
// Bir string ifade içersiinde js expression kullanmak

const message4 = `Toplam: ${3 + 5}`; // backtick

const message5 = `Bugün günlerden ${dayToday}`;

console.log(message4, message5);