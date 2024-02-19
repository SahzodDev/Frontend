


/* foreach */

const arr1 = [1,2,3,4,5];

arr1.forEach(handle);

function handle() {
    console.log("a");
}

arr1.forEach( ()=> {
    console.log("I am from arrow.");
});


arr1.forEach(function() {
    console.log("I am from arrow");
});

const arr2 = ["a", "b", "c", "d", "e"];

arr2.forEach( (item, index, arr) => {
    console.log(item, index, arr); // ilk parametre o sırada üzerinde olduğumuz item, ikinci parametre index numarası, 3. parametre içinde dolaştığımız array'in kendisi.
});

arr2.forEach(func1);

function func1(x, y, z){ // dışarıdan gönderilen fonksiyonda da parametreler kuralı geçerlidir, içeriye verilen parametrenin kaçıncı parametre olduğu önemlidir, isminin önemi yoktur.
    console.log(x, y, z);
}


const DATA_PEOPLE = [
    {id: 14, name: "Deneme", isRegistered:false},
    {id: 56, name: "Deneme1", isRegistered:false},
    {id: 57, name: "Deneme2", isRegistered:false},
    {id: 50, name: "Deneme3", isRegistered:false}
];

DATA_PEOPLE.forEach( (personObj, index, arr)=> {
        console.log(personObj.name);
        const {id, name, isRegistered} = personObj;
        const personEl = document.createElement("p");
        personEl.textContent = `id: ${id} - name: ${name} - isRegistered: ${isRegistered}`;
        document.body.append(personEl);
});


/* map */

const nums = [1,2,3,4,5];

const doubles = nums.map( (item, index, arr)=> {
    return item * 2;
});

console.log(doubles === nums);

const doubles2 = nums.map(double);

function double(num) {
    return num * 2;
}

// ["lorem ipsum", "At saeva e speculis tempus dea nacta nocendi", "audiit et Triviae longe lacus, audiit amnis"] -> ["<p> lorem ipsum </p>"] gelen array itemlerini p tagiyla sarıp yeni array dön.

const latinSentences = ["lorem ipsum", "At saeva e speculis tempus dea nacta nocendi", "audiit et Triviae longe lacus, audiit amnis"];

const pElArr = latinSentences.map ( (item, index, arr) => {
    const first = "<p>";
    const last = "</p>";

    console.log(item);

    modifiedString = first + item + last;
    console.log(item);
    
    return modifiedString; // map kullanırken, her callback'de dönüştürülen item callback edilmeli.
});

pElArr.forEach((item)=>{
    console.log(item);
});

/* 

    [
        {wrapper:"p", content: "lorem ipsum"},
        {wrapper:"h1", content:"deneme deneme"}
    ]

    --> ["<p>lorem lorem</p>", "<h1>deneme deneme</h1>"]

*/

const contentArr = [
    {wrapper:"p", content: "lorem ipsum"},
    {wrapper:"h1", content:"deneme deneme"}
];

let newArr = contentArr.map((item, index, arr)=> {
    const {wrapper, content} = item;

    
    let resultStr = "<" + wrapper + ">" + content + "</" + wrapper + ">";
    
    console.log(resultStr);

    return resultStr;
});

newArr.forEach( (item)=> {
    console.log(item);
})

/* filter */

const myNums = [1,2,3,4,5,6,7];

const filteredArr1 = myNums.filter( () => {
    return false; // filter metoduna geçirdiğiniz callback, her bir eleman için false döndürürse, hiçbir eleman filtreyi geçemez.
});

// filteredArray1 --> [] boş bir dizi

const filteredArr2 = myNums.filter( () => {
    return false; // filter metoduna geçirdiğiniz callback, her bir eleman için true döndürürse, her eleman filtreyi geçer.
});

// filtereddArr2 --> [1,2,3,4,5,6,7]

const myOddNums = myNums.filter( (num)=>{return num % 2!== 0})

// arrow function kod bloğunda tek bir return statement yazılacaksa, arrow function kısa yazılışı kullanılabilir.

const myEvenNums = myNums.filter( (num)=> num % 2=== 0)

console.log(myOddNums);

// ["a", 1, 2, "b", "d"] -> ["a", "b", "d"]

const exArr = ["a", 1, 2, "b", "d"];

const onlyLettersArr = exArr.filter(filterLetters);

function filterLetters(item) {
    if (typeof item === "string") {
        return true;
    }
    else {
        return false;
    }
}

console.log(onlyLettersArr);

const DATA_EMPLOYEES = [
    {id:34, name:"Deniz", profession:"Engineer"},
    {id:33, name:"Deniz2", profession:"Professor of None"},
    {id:32, name:"Deniz3", profession:"Engineer"},
    {id:30, name:"Deniz4", profession:"Professor of None"}
];

const onlyEngineers = DATA_EMPLOYEES.filter((item)=>{
    return item.profession === "Engineer";
});

console.log(onlyEngineers);

/* reduce */

const basket = [10000, 20000, 400, 200];

const total = basket.reduce( (previousValue, currentValue, index, arr)=>{

    console.log(previousValue, currentValue, index, arr);

    return previousValue + currentValue;
}, 0);

const totalV2 = basket.reduce( (previousValue, currentValue, index, arr)=>{

    console.log(previousValue, currentValue, index, arr);

    return previousValue + currentValue;
}); // eğer initial value verilmezse ilk eleman initial value olarak alınır.


console.log(total);

const inventory = [
    {id:0, title:"lenovo xm3", price:54000, count: 1},
    {id:0, title:"lenovo f xm3", price:12000, count: 1},
    {id:0, title:"xm3 mouse", price:34000, count: 1},
    {id:0, title:"keyboard xm3", price:54000, count: 1},
    {id:0, title:"Patex Glue", price:220, count: 1},
];

const totalPrice = inventory.reduce((acc, curVal, index, arr)=>{

    

    

    return acc + curVal.price;
}, 0); // **toplanan değer prevVal içinde saklanıyor.

console.log(totalPrice);

/* find */

const myNums2 = [1, 2, 3, 5, 105, 12, 120];

console.log(myNums2.find((num)=>{
    return num > 100; // içerisine yazılan callback function'dan ture veya false dönmesini bekler. function içerisine true veya false dönen bir test yazılması gerekir. true döndüren ilk öğeyi return eder.
}));



/* findLast */

const lastFoundNum = myNums2.findLast((num)=>{
    return num > 100; // sondan başlayarak teste uyan ilk değeri döndürür.
});

console.log(lastFoundNum);

/* findIndex */

const foundnumIndex = myNums2.findIndex((num) => {
    return num > 100;
});

console.log(foundnumIndex);

/* findLastIndex */

const foundLastnumIndex = myNums2.findLastIndex((num) => {
    return num > 100;
});

console.log(foundLastnumIndex);

/* every */

const myNums3 = [3, 4, 5, 6]; // dizideki tüm elemanlar verilen testi geçiyorsa true döndürür.

const isAllEven = myNums3.every(isEven);

function isEven(num){
    return num % 2 === 0;
};

console.log(isAllEven);

/* some */ 

// verilen dizideki tek bir eleman bile testi geçiyorsa true döndürür.

const myNums4 = [2, 3, 4, 5];

const hasEvenNums = myNums.some(isEven);

console.log(hasEvenNums);

/* sort */

const digitArr = [1, 2, 587675, 54,2345, 10001, 11];
/*
digitArr.sort((a, b)=>{
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
});
*/

digitArr.sort((a, b)=>{
    return a - b;
});

console.log(digitArr);

const productArr = [
    {id: 1, price: 1234, name:"prod1"},
    {id: 2, price: 134, name:"prod2"},
    {id: 3, price: 44, name:"prod3"},
    {id: 4, price: 1212344, name:"prod4"},
];

const newArr2 = [].concat(productArr); // kopyalama yöntemi

console.log(newArr2);
console.log(productArr === newArr2);

newArr2.sort((a, b)=>{
    return a.price - b.price;
});

console.log("original:",productArr, "copy", newArr2);



