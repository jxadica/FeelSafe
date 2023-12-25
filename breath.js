let intervalId;

const start = document.querySelector(".breathStart");
let container = document.querySelector(".breathDuration")
let text = document.querySelector(".text")
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

start.addEventListener("click", function () {
    if (start.innerText === "Start") {
        breathAnimation();
        intervalId = setInterval(breathAnimation, totalTime);
        start.innerText = 'End';
    } else {
        clearInterval(intervalId);
        start.innerText = 'Start';
    }
});

function breathAnimation() {
    text.innerText = 'Breathe In!';
  
    setTimeout(() => {
        text.innerText = 'Hold';
  
        setTimeout(() => {
            text.innerText = 'Breathe Out!';
        }, holdTime);
    }, breatheTime);
}