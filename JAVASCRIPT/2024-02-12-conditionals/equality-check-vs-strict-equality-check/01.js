


// == vs ===

// coercion
if (3 == "3") {
    console.log("Yeps!!!"); // returns true because of coercion. through coercion, it makes both sides to be of same type.
}

// strict equality check
// no coercion
if (3 === "3") {
    console.log("Nope!!"); // returns false because on strict equality check, there is no coercion.
}