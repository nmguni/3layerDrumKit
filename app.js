function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return // stop function from running all together
    audio.currentTime = 0; // rewinds to the start 
    audio.play();

    // adds stying 
    key.classList.add('playing')

    //transition end event to remove class when its done playing 
}

function removerTransition(e) {
    if (e.propertyName !== 'transform') return // skip if it is not a transform 
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', removerTransition
    )
})
window.addEventListener('keydown', playSound);