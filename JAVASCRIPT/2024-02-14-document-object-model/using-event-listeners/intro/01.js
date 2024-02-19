



const stageEl = document.getElementById("the-stage");

stageEl.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(e){

    // e -> Mouse Event ({pageX: number, pageY: number, target, isTrusted...})

    /*
    const xPos = e.pageX;
    const yPos = e.pageY;
    */

    const {pageX, pageY} = e; // with object destructuring.
    
    stageEl.textContent = 
    `
    Mouse konum bilgisi:
    x: ${pageX}
    y: ${pageY}
    `;
}


/*
stageEl.addEventListener("mousemove", function(){});

stageEl.addEventListener("mousemove", ()=>{});
*/
