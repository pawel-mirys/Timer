// Selectors
const inputs = document.querySelectorAll('input');
const hourInput = document.querySelector(".hours-input");
const minuteInput = document.querySelector(".minutes-input");
const timer = document.querySelector('.clock');
const startBtn = document.querySelector('.start');





// If time = 0 - Stop counting
function ifZero() {
    if (time <= 0) {
        clearInterval(countdown);
        console.log("done");
    }
}


// Time - set
function updateCountdown() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60;
    let hours = Math.floor(time / 60 / 60);
    minutes = minutes >= 60 ? minutes %= 60 : minutes;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours < 10 ? '0' + hours : hours;
    timer.innerText = (`${hours}:${minutes}:${seconds}`);
    inputs.forEach(input => {
        input.value = "";
    });
    ifZero()
    time--;
};