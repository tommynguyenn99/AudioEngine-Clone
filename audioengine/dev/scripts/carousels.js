//carousel slick script


//hero carousel

$(document).ready(function(){

    $('.hero-slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    })
})



//shop by carousel
$(document).ready(function(){

    function updateSlick(event) {
        if (event.matches) { // We want Slick to run!
          $('.shop-by-container').slick ({
              dots: false,
              arrows: true,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
                  {
                      breakpoint: 800,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                      }
                  },
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 5,
                          slidesToScroll: 5,
                      }
                  }
              ]
          })
        } else { // 'unslick'
            $('.shop-by-container').slick('unslick')
        }
      }
      
      const mediaQuery = window.matchMedia("(min-width: 432px)")
      updateSlick(mediaQuery) // Call listener function at run time
      mediaQuery.addListener(updateSlick) // Attach listener function on state changes


})


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




