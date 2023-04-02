// Hamburger Menu
const hamburger = document.querySelector (".hamburger"); 
const navMenu = document.querySelector(".nav-menu-mobile"); 

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
})

document.querySelectorAll(".nav-links-mobile").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




// Play button for pop out 
const playBtn = document.querySelector('.play-btn');
const videoPopup = document.querySelector('.video-popup');
const closeBtn = document.querySelector('.close-btn');
const video = document.querySelector('video');

playBtn.addEventListener('click', () => {
  videoPopup.style.display = 'block';
  video.controls = true; 
  playBtn.style.display = "none"; 
});

closeBtn.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  video.pause(); 
  video.currentTime = 0; 
  playBtn.style.display = "block";
});

videoPopup.addEventListener('click', (event) => {
  if (event.target === videoPopup) {
    videoPopup.style.display = 'none';
  }
});

