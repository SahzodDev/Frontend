

const hamburgerNavEl = document.getElementById("hamburger-nav");

const hamburgerUlEl = document.querySelector(".hamburger-nav > ul");

const hamburgerButtonEl = document.querySelector(".hamburger-nav > button");

console.log()

/*
hamburgerNavEl.addEventListener("click", (e)=>{
    const {target} = e;

    console.log(target);

    if (hamburgerNavEl.classList.contains("expanded") && hamburgerButtonEl.classList.contains("off")){
        hamburgerNavEl.classList.remove("expanded");
    
        hamburgerButtonEl.classList.remove("off");
    }
    else {
        hamburgerNavEl.classList.add("expanded");
    
        hamburgerButtonEl.classList.add("off");
    }
    
})
*/

hamburgerNavEl.addEventListener("click", (e)=>{
    const {target} = e;

    console.log(target);

    

    hamburgerNavEl.classList.toggle("expanded");
    
    hamburgerButtonEl.classList.toggle("off");
    
})