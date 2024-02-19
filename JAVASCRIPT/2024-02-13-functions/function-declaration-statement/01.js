

// keyword functionName(parameters) {code-block for statements}

function test(paremeter1, parameter2, parameter3){
    // statement 1
    // statement 2
} 

// invoking or calling a function
const argument1 = "a";
const argument2 = "b";
const argument3 = "c";
test(argument1, argument2, argument3);


function add(n1, n2) {
    return n1 + n2;
}

const result1 = add(3 + 5); // returns NaN, because, sicne we didn't provided second parameter, the second parameter is undefined. thus the sum of the numerical expression and a parameter of "undefined" type returns NaN.

console.log(add(3,5), result1);

function test2(){
    // implicit return undefined
}

console.log(test2());

// using default parameter.
function greet(userName, greetingWord = "Selam") {
    return `${greetingWord}, ${userName}`; 
}

console.log(greet("Burak"));