// Selectors
const inputs = document.querySelectorAll('input');
const hourInput = document.querySelector(".hours-input");
const minuteInput = document.querySelector(".minutes-input");
const timer = document.querySelector('.clock');
const startBtn = document.querySelector('.start');

// Set "mins" and "hrs" = 0 at the beggining
function setZero() {
    mins = 0;
    hrs = 0;
    return mins, hrs;
}
setZero();

// Inputs event listeners
hourInput.addEventListener('input', (e) => {
    val = e.target.value;
    hrs = val;
    hrs <= 0 ? hrs = 0 : hrs;
    hrs = parseInt(hrs);
    hrs *= 60 * 60;
    console.log(` hours in seconds = ${hrs}s`);
    return hrs;

})

minuteInput.addEventListener('input', (e) => {
    let val = e.target.value;
    mins = val;
    mins <= 0 ? mins = 0 : mins;
    mins = parseInt(mins);
    mins *= 60;
    console.log(` minutes in seconds = ${mins}s`);
    return mins;
})


// Add values from both inputs
function addValues() {
    time = hrs + mins;
    return time;
}

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


// Reset all
function reset() {
    mins = 0;
    hrs = 0;
    time = 0;
    startBtn.classList.remove('active');
    return mins, hrs;
}

// Time - start
function start() {
    addValues();
    if (!startBtn.classList.contains('active') && time > 0) {
        countdown = setInterval(updateCountdown, 1000);
        startBtn.classList.toggle('active');
    } else if (startBtn.classList.contains('active') && time >= 0) {
        reset();
    } else {
        ifZero();
    }
}



// Time - trigger
startBtn.addEventListener('click', start);