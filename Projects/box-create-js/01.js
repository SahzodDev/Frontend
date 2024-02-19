


const boxGeneratorEl = document.querySelector("#box-generator");

const boxContainerEl = document.querySelector(".box-container");

boxGeneratorEl.addEventListener("click", (e)=> {
    const boxEl = document.createElement("div");

    boxEl.classList.add("box");

    const minRange = 0;
    const maxRange = 255;

    let redValue = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    let greenValue = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    let blueValue = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    boxEl.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    boxContainerEl.append(boxEl);
})