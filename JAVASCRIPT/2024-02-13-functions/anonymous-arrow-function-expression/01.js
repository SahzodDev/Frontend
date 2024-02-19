


const myFunc = () => {return "Hello I am the arrow..."};

console.log(myFunc());

// multiple parameters
const myFunc2 =  (p1, p2, p3) => {return p1 + p2 + p3}; 


// single parameter
const myFunc3 = p1 => {return p1};


// implicit return
const double = k => k * 2; // tek satır statement olduğu için return implicit şekilde yazılabiliyor.

console.log(double(24));

/*
    Multiple statement var ise, kod bloğu şeklinde yazılabilir.
    () => {
        statement
        statement
        statement
    }
 */

    
    // returning and expression shortcut
    // () => expression;

    // equals

    // () => { return expression;}  
