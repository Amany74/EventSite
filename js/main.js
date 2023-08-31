
// Loading Screen

$("document").ready(function(){
    $(".loader").fadeOut(500,function(){
        $("#loading").remove();
        $("body").css({overflowY: 'auto'});
    })
});


// to top
let occOffset = $("#occordion").offset().top

$(window).scroll(function(){
    let windoOffset = $(window).scrollTop();
    if(windoOffset >= occOffset-100){
        $("#top").fadeIn(500);
    }
    else{
        $("#top").fadeOut(500);

    }
});
// To top functionality
$("#top").click(function(){
    $("body, html").animate({scrollTop:"0"},500)
})

// clode
$(".close-icon").click(function(){
    $("#menu").animate({left:`-${$(".menu-content").innerWidth()}`},500);
});

// toogle open 
let openBoxOff = $("#menu").offset().left;
if(openBoxOff == 0 ){
    // opened
    $("#menu").animate({left:`-${$(".menu-content").innerWidth()}`},500);
}

$(".open").click(function(){
    openBoxOff = $("#menu").offset().left;
    if(openBoxOff == 0 ){
        // opened
        $("#menu").animate({left:`-${$(".menu-content").innerWidth()}`},500);
    }else{
        // closed
        $("#menu").animate({left:0},500);

    }
});


$(".menu-content ul li").click(function(e){
    
    let targetOffset = $($(e.target).attr("href")).offset().top;
    $("body, html").animate({scrollTop: targetOffset},500);
});




// Occordion
$(".occordion-content").click(function(e){
    let target = $(e.target).attr("id");
    if($(`#${target}+p`).offset().top == 0 ){
        $(".occordion-content p").slideUp(1);
        $(`#${target}+p`).slideDown(500);
    }else{
        $(`#${target}+p`).slideUp(500);
    }
    

})


// set the date we are counting down to
var countDown = new Date("jan 1, 2030 12:12:50").getTime();

//update the count down in every 1 second
var update = setInterval(function () {
    var now = new Date().getTime();
    var diff = countDown - now;

   var days = Math.floor(diff / (1000 * 60 * 60 * 24));
   var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((diff % (1000 * 60)) / 1000);

   //now output the result in an element with id ="time"
    $("#days").text(`${days} -D`);
    $("#hours").text(`${hrs} -H`);
    $("#min").text(`${minutes} -M`);
    $("#sec").text(`${seconds} -S`);
    

    if (diff < 0) {
        clearInterval(update);
        document.getElementById("time").innerHTML = "Expired";
    }
}, 1000);



// Decrease mess characters number
$("#message").on("keyup", function(e){
    let len =  $("#message").val().length;
    let countText = 100-len;
    if(countText >= 0){
    $("#char-count").text(countText);
    }
    else{
    $("#char-count").text("0");
    // prevent inputting more chars
    e.target.value = (e.target.value).substring(0, 100);
    }
})
