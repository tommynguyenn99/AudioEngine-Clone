// Hamburger Menu
const hamburger = document.querySelector (".hamburger"); 
const navMenu = document.querySelector(".nav-menu-mobile"); 
const $mobileNav = $(".mobile-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    $mobileNav.css("display", "block");
})

document.querySelectorAll(".nav-links-mobile").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    $mobileNav.css("display", "none");
}))



// Variables for popout video and video 
const playBtn = document.querySelector('.play-btn');
const videoPopup = document.querySelector('.video-popup');
const closeBtn = document.querySelector('.close-btn');
const video = document.querySelector('video');
const videoBorder = document.getElementById("audio-video");

// Play button 
playBtn.addEventListener('click', () => {
  videoPopup.style.display = 'block';
  video.controls = true; 
  playBtn.style.display = "none"; 
});

// Close button 
closeBtn.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  video.pause(); 
  video.currentTime = 0; 
  playBtn.style.display = "block";
});

// Video popout 
videoPopup.addEventListener('click', (event) => {
  if (event.target === videoPopup) {
    videoPopup.style.display = 'none';
  }
});

// Video Border when video is played 
videoBorder.addEventListener('click', () => {
  videoBorder.classList.add('video-border');
});