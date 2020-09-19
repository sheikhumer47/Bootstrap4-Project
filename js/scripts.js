$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $("#carouselButton").click(function(){
     if ($("#carouselButton").children("span").hasClass('fa-pause')) {
         $("#mycarousel").carousel('pause');
         $("#carouselButton").children("span").removeClass('fa-pause');
         $("#carouselButton").children("span").addClass('fa-play');
     }
     else if ($("#carouselButton").children("span").hasClass('fa-play')){
         $("#mycarousel").carousel('cycle');
         $("#carouselButton").children("span").removeClass('fa-play');
         $("#carouselButton").children("span").addClass('fa-pause');                    
     }
 });


});


$('#loginModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) 
var modal = $(this)
modal.find('.modal-title').text("Login")

})



$('#reservemodal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) 
var modal = $(this)
modal.find('.modal-title').text("Reserve Table")
})