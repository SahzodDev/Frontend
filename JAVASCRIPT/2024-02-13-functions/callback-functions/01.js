
// callback functions

// functions passes as an argument to another function as a callback function

function emergencyCall(callNumber){
    callNumber();
}

function call112(){
    console.log("calling 112");
}

function call911(){
    console.log("calling 911");
}

emergencyCall(call112);





const myNums = [1, 3, 4, 6, 8];

// boş bir dizi oluştur
// verilen array içerisinde dön
// eleman kalanına bak
// boş diziye ekle

function filterEvenNumsArr(arr){
    const rVal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            rVal.push(arr[i]);
        }
    }

    return rVal;
}

function filterEvenNumsArr(arr){
    const rVal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){
            rVal.push(arr[i]);
        }
    }

    return rVal;
}

console.log(filterEvenNumsArr(myNums));

function filterArr(arr, test) {
    const rVal = [];

    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            rVal.push(arr[i]);
        }
    }

    return rVal;
}

console.log(filterArr([2, 4, 7, 9], checkEven));

function checkEven(num){
    return num % 2 === 0;
}

filterArr([2, 4, 7, 9], (num)=>num % 2 === 0); // arrow function, curly brace olmazsa direkt return eder.


