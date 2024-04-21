
/* Nav Section Start */

(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 

/* Nav Section End */

/* Home Slider Start */

$('.home-section').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
    speed: 3000,
    autoplaySpeed:1500,
    dots:false,
    arrows:true, 
    infinite:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  })

/* Home Slider End */

/* Fundraising Slider Start */

$('.fundraising-slider').slick({
    slidesToShow: 8,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2500,
    dots:false,
    arrows:false, 
    infinite:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow:4,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
        }
      }
    ]
  })

/* Fundraising Slider End */

/* scroll to top button start */  
myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}
/* scroll to top button end */