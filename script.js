// Countdown function
const countdown = document.getElementById('countdown');
const timeDisplay = document.getElementById('time');
const newYear = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timeDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function playLoveVideo() {
    // Show the video container
    const videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "block";

    // Play the video
    const video = document.getElementById("love-video");
    video.play();
}

setInterval(updateCountdown, 1000);
