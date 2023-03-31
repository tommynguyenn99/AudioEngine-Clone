// Hamburger Menu
const hamburger = document.querySelector (".hamburger"); 
const navMenu = document.querySelector(".nav-menu"); 

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



// slick carousel elements for in-the-news div
$(document).ready(function(){

    $('.news-wrap').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: "unslick",
            }
        ]
    })

})
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

