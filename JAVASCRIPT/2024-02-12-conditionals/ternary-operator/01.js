

const isUserAllowed = false;

let message;


if (isUserAllowed){
    message = "Merhaba";
} else {
    message = "Üzgünüz.";
}

console.log(message);

/* TERNARY OPERATOR */

// expression ? "expression true" : "expression false";

message = isUserAllowed ? "Merhaba" : "Üsgünüz"; // eşitliğin sağ tarafı bir expression olduğu için, expression bekleyen her yerde kullanılabilir.

console.log(message);

console.log(isUserAllowed ? "Merhaba" : "Üzgünüz");

// 3 < 5 && "asd" ? "deneme : "test" ? 3 : 5;
