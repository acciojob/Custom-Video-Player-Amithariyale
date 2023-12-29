/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

toggle.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    toggle.innerText = "pause";
  } else {
    video.pause();
    toggle.innerText = "play_arrow";
  }
});

video.addEventListener("timeupdate", () => {
  let width = (video.currentTime * 100) / video.duration;
  progressBar.style.width = `${width}%`;
});

ranges[0].addEventListener("input", (e) => {
  video.volume = e.target.value;
});

ranges[1].addEventListener("change", (e) => {
  video.playbackRate = e.target.value;
});

skipButtons[0].addEventListener("click", () => {
  video.currentTime -= 10;
});
skipButtons[1].addEventListener("click", () => {
  video.currentTime += 25;
});
