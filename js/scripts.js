$("#carouselButton").on("click", function(){
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

$("#login").on("click", function(){
    $('#loginModal').modal('toggle');
});

$("#loginCancel").on("click", function(){
    $('#loginModal').modal('toggle');
});

$("#loginClose").on("click", function(){
    $('#loginModal').modal('toggle');
});

$("#orderButton").on("click", function(){
    $('#orderModal').modal('toggle');
});

$("#orderClose").on("click", function(){
    $('#orderModal').modal('toggle');
});