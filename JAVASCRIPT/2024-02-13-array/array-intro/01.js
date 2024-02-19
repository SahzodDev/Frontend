

// literal array creation

const myArr = ["a", 1, true, [1,2,3], () => {}, function(){}, "burak"];

const myArr2 = [];

// array is referenced type

// typeof arr -> object

// accessing the items of an array

const firstElOfMyArr = myArr[0]; // dizi indexleri sıfırdan başlar.

const lengthOfMyArr = myArr.length;

const lastElOfMyArr = myArr[lengthOfMyArr - 1];

const a = myArr[0];
const b = myArr[1];
const c = myArr[2];


/* *** DESTRUCTURING *** */

const [x, y, z] = myArr; // dizinin ilk üç elemanı çağırma.

const [ , , t] = myArr; // boşluk bırakılarak çağrılmak istenmeyen elemanalr atlanabilir.


/* mutation */

const alphaNumeric = ["a", 1, "b", 2, "x"];

alphaNumeric[5] = 15;

console.log(alphaNumeric); // array is mutable

const userName = "Burak";

userName[0] = "C";

console.log(userName); // string is immutable

// Being referenced type

const defaultSettings = ["dark-theme", "zoom-level:12"];

const userSettings = defaultSettings;

userSettings[0] = "light-theme";

console.log(defaultSettings);





