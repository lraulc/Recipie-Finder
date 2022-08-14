import "../SCSS/styles.scss";
// import * as bootstrap from "bootstrap";

const topBtn = document.getElementById("top-btn");
const resetBtn = document.getElementById("reset-btn");

let counter = 0;
const clickCount = document.getElementById("click-counter");

topBtn.addEventListener("mousedown", () => {
    topBtn.innerHTML = "Clicked";
    counter += 1;
    clickCount.innerHTML = counter;
    if (counter > 0) {
        clickCount.style.color = "orange";
    }
});
topBtn.addEventListener("mouseup", () => {
    topBtn.innerHTML = "Click me";
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    clickCount.innerHTML = counter;
    clickCount.style.color = "white";
});
