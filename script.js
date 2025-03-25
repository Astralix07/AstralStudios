
const video = document.getElementById('background-video');
const muteButton = document.getElementById('mute-button');

// Function to toggle mute/unmute
function toggleMute() {
  if (video.muted) {
    video.muted = false; // Unmute the video
    muteButton.innerHTML = '🔊'; // Change the button text to "Unmute"
  } else {
    video.muted = true; // Mute the video
    muteButton.innerHTML = '🔇'; // Change the button text to "Mute"
  }
}

// Ensure the video plays when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  video.play();
});