


// setTimeout();

const timeoutId = setTimeout( () => {
    console.log("Hello from future...");
}, 3000);

console.log(timeoutId);

const timeoutId2 = setTimeout( () => {
    console.log("Hello from future 2...");
}, 5000);

console.log(timeoutId2);



// clearTimeout ile timeout callback function execution'ı durdurabilirsiniz.

clearTimeout(timeoutId);


// setInterval();

const intervalId = setInterval( handleInterval, 500);

function handleInterval() {
    console.log("time is ticking...");
}

const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", handleClearInterval);

function handleClearInterval() {
    clearInterval(intervalId);
}