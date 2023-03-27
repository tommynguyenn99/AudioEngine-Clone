// Write your JavaScript here...

//
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
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: 'unslick'
            }
        ]
    })

})