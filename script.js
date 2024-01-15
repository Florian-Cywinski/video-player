// To get all relevant elements of the HTML file
const videoAPI = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timeStampDisplay = document.getElementById('timestamp');

function playPause() {
    if (videoAPI.paused) {
        // playBtn.querySelector('i.fa').classList.remove('fa-play');  // i is the icon (i tag) - fa (font awesome) - fa-play is the play icon we want to remove
        // playBtn.querySelector('i.fa').classList.add('fa-pause');  // i is the icon (i tag) - fa (font awesome) - fa-pause is the pause icon we want to add
        videoAPI.play();
    } else {
        // playBtn.querySelector('i.fa').classList.add('fa-play');  // i is the icon (i tag) - fa (font awesome) - fa-play is the play icon we want to add
        // playBtn.querySelector('i.fa').classList.remove('fa-pause');  // i is the icon (i tag) - fa (font awesome) - fa-pause is the pause icon we want to remove
        videoAPI.pause();
    }
}

function stopVideo() {
    videoAPI.pause();
    videoAPI.currentTime = 0;
}

function updateProgress() {
    progressBar.value = (videoAPI.currentTime / videoAPI.duration) * 100;
    // To get the minutes
    let minutes = Math.floor(videoAPI.currentTime / 60);
    if (minutes < 10) { // To show the time like this: 00:00
        minutes = '0' + String(minutes);
    }
    // To get the seconds
    let seconds = Math.floor(videoAPI.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    // To show the time in the DOM
    timeStampDisplay.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
    videoAPI.currentTime = (+progressBar.value * videoAPI.duration) / 100; // Hint progessBar.value is a string - to make it a number add + before it
}

function updateIcon() {
    if (videoAPI.paused) {
        playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// To play / pause the video when clicking into the video or the play / pause button
videoAPI.addEventListener('click', playPause);
playBtn.addEventListener('click', playPause);
// To stop the video
stopBtn.addEventListener('click', stopVideo);
// To update the progress bar
videoAPI.addEventListener('timeupdate', updateProgress);
// To set the progress bar
progressBar.addEventListener('click', setProgress);
// To change the icon - play / pause
videoAPI.addEventListener('play', updateIcon);
videoAPI.addEventListener('pause', updateIcon);