// Photo Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Music toggle
const music = document.getElementById("birthday-music");
const btn = document.getElementById("music-toggle");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔈 Mute Music";
  } else {
    music.pause();
    btn.textContent = "🔇 Unmute Music";
  }
});