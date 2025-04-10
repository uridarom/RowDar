// Mute a singular HTML5 element
function muteMe(elem) {
    elem.muted = true;
    elem.pause();
}

// Try to mute all video and audio elements on the page
function mutePage() {
    document.querySelectorAll("audio").forEach((elem) => muteMe(elem));
}