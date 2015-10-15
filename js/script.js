$(document).ready(function() {
  $("#slider").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination : false,
    paginationSpeed : 400,
    singleItem:true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
});