

// -- Çözüm 1

/*
const buttonEl1 = document.getElementById("btn-1");

const buttonEl2 = document.getElementById("btn-2");

const carouselContainerEl = document.getElementById("moving-container");

buttonEl1.addEventListener("click", handleMouseClick1);

buttonEl2.addEventListener("click", handleMouseClick2);

function handleMouseClick1 (e) {

    
    carouselContainerEl.style.marginLeft = "0";
}

function handleMouseClick2 (e) { 

    carouselContainerEl.style.marginLeft = "-300px";
    
}
*/

// --Çözüm 2

/*
const carouselBtnList = document.querySelectorAll("#carousel-products > nav > button");

const carouselContainerEl = document.getElementById("moving-container");

for(let i = 0; i< carouselBtnList.length; i++) {
    carouselBtnList[i].addEventListener("click", handleMove);
}

function handleMove(e) {
    console.log(e);
    const {target} = e;
    console.log(target);
    const index = target.dataset.index;
    console.log(index);
    carouselContainerEl.style.marginLeft = index * -100 + "%";
}
*/

// --Çözüm 3

const carouselNavEl = document.querySelector("#carousel-products > nav");
const movingContainerEl = document.getElementById("moving-container");

carouselNavEl.addEventListener("click", (e) => {
    const {target} = e;
    const index = target.dataset.index;

    if (!index)return;

    movingContainerEl.style.marginLeft = -100 * index + "%";
    
});

