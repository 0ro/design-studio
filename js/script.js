$(document).ready(function() {
  $("#slider").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    pagination : false,
    paginationSpeed : 400,
    singleItem:true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
})