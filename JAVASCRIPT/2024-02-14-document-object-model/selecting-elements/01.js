



/*
    Event

    /// document load events
    /// img load event

*/


/*
    User Event

    mouse events

    -click
    -double click
    -mouse move
    -mouse over
    -mouse out
    ...

    touch events

    keyboard events

    -key press
    -key down
    -key up
    ...

    voice events

*/


// triggering, handler callback functions

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", handleClick);

function handleClick(){
    // the-box id'Li kutunun fon rengini pembe yap.

    const boxEl = document.getElementById("the-box");
    boxEl.style.backgroundColor = "pink";
}

const pElList = document.querySelectorAll("p");

console.log(pElList);

for (let i = 0; i < pElList.length; i++){
    pElList[i].style.backgroundColor = "yellow";
}


