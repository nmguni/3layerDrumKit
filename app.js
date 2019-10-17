// /* switch events */
const isChecked = document.getElementById("topCheck");
const isMDChecked = document.getElementById("midCheck");
const isBTCheck = document.getElementById("btCheck");
// -------------
const firstRow = document.getElementById("topArea");
const middleRow = document.getElementById("middleArea");
const bottomRow = document.getElementById("bottomArea");

function topRow() {
    if (isChecked.checked == 1) {
        firstRow.classList.add("displayNone");
    } else if (isChecked.checked == 0) {
        firstRow.classList.remove("displayNone");
    }
}
function midRow() {
    if (isMDChecked.checked == 1) {
        middleRow.classList.add("displayNone");
    } else if (isMDChecked.checked == 0) {
        middleRow.classList.remove("displayNone");
    }
}
function botRow() {
    if (isBTCheck.checked == 1) {
        bottomRow.classList.add("displayNone");
    } else if (isBTCheck.checked == 0) {
        bottomRow.classList.remove("displayNone");
    }
}

// SHIFT BUTTOM 
// on shft click backgroun cahnges to dynamic 

function shift_bar(event) {
    const key = event.keyCode
    if (key == 32) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
window.addEventListener("keydown", shift_bar);






function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function from running all together
    audio.currentTime = 0; // rewinds to the start
    audio.play();

    // adds stying
    key.classList.add("playing");

    //transition end event to remove class when its done playing
}

function removerTransition(e) {
    if (e.propertyName !== "transform") return; // skip if it is not a transform
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removerTransition);
});
window.addEventListener("keydown", playSound);
