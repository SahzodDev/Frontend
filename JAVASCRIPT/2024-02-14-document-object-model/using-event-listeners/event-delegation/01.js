



const navEl = document.querySelector("nav");

// nav üzerindeki click eventini çocuklara delege et...
navEl.addEventListener("click", (e)=>{
    // alert("Hello");
    const {target} = e;

    console.log(target);
})