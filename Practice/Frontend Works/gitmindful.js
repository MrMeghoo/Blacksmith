const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");


const sounds = document.querySelectorAll(".audio-max button");


const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();

// Duration for time settigns-reminder to go back and add increment options for 30 seconds at a time in the future
const timeSelect = document.querySelectorAll(".on-time button");
let fakeDuration = 300;
outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    // video.src = this.getAttribute("data-video"); this was disrupting my background image causing it to get pushed out of fram whenever button is clicked
    // will come bacl to it in the future to add more backgrounds or make it dynamic with more options.
    song.pause();
    video.pause();
    song.currentTime = 0;
    play.src = "./Images/playbutton2.svg";
  });
});

play.addEventListener("click", function() {
    checkPlaying(song);
});

replay.addEventListener("click", function() {
  restartSong(song);
});

const restartSong = song => {
  song.currentTime = 0;
  console.log("Restarted song");
};

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

//get svg files up and running to add rest of icons to my sounds circle for Demo
const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./Images/playbutton2.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./Images/pause-circle.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;
  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};
