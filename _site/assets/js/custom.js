$(function () {
    // this will get the full URL at the address bar
    let url = window.location.href;

    // passes on every "a" tag 
    $("nav a").each(function () {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).addClass("active");
        }
    });
});
$(function () {
    // this will get the full URL at the address bar
    let mobileUrl = window.location.href;

    // passes on every "a" tag 
    $(".mobile-slider__menu-list-item a").each(function () {
        // checks if its the same on the address bar
        if (mobileUrl == (this.href)) {
            $(this).addClass("active");
        }
    });
});

let iframe = document.querySelector(".youtube-video")


    //video - bottom

    const placeHolderImageButton = document.querySelector(".placeholder__image");
const player2Video = document.querySelector("#second_video");
var vid = document.getElementById("myVideo");



function pauseVid() {
    vid.pause();
}
vid.pause();
    $(window).scroll(function () {
        var top_of_element = $(".second-section").offset().top - 100;
        var bottom_of_element = $(".second-section").offset().top + $(".second-section").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            function playVid() {
                vid.play();
            }
            playVid()
        } else {
            function pauseVid() {
                vid.pause();
            }
            pauseVid()
        }
    });
   

function playYoutubeVideo() {
    if (placeHolderImageButton) {
        placeHolderImageButton.classList.add("hide_youtube_placeholder");
        player2Video.style.visibility = 'visible';
       
        second_video.play();
    }
}

function pauseVideo() {
    if (second_video.paused) {
        
        placeHolderImageButton.addEventListener("click", playYoutubeVideo)
    }
}

pauseVideo()

second_video.onpause = function () {
    placeHolderImageButton.classList.remove("hide_youtube_placeholder");
    player2Video.style.visibility = 'hidden';
};

let buttons = document.querySelector(".mobile-slider__menu")
let element = document.querySelector(".header__menu-icon")
let closeBtn = document.querySelector(".closebtn")



element.addEventListener("click", function (e) {
    buttons.classList.add("visible")
    document.body.classList.add("lock-scroll")
    e.preventDefault();

})
closeBtn.addEventListener("click", function () {
    buttons.classList.remove("visible")
    document.body.classList.remove("lock-scroll")
})






$(document).ready(function () {
    $('.scroll-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 400);
    })
})



let showTimbtn = document.querySelector(".show-tim-btn");
let toggleSimonBtn = document.querySelector(".toggle-simon-btn");
let displaySimon = document.querySelector(".display-simon");
let timDisplayed = document.querySelector(".tim-displayed");
let timDisplayed__heading__tim = document.querySelector(".show-tim-btn__Tim");
let timDisplayed__heading__Simon = document.querySelector(".show-tim-btn__Simon");


if (toggleSimonBtn) {

    toggleSimonBtn.addEventListener("click", function () {

        timDisplayed__heading__Simon.classList.add("border-on-button")
        timDisplayed__heading__tim.classList.remove("border-on-button")
        timDisplayed.style.display = "none";
        displaySimon.classList.remove("toggle-class");
        displaySimon.style.display = "block"

    })
}


if (showTimbtn) {
    showTimbtn.addEventListener("click", function () {
        timDisplayed__heading__Simon.classList.remove("border-on-button")
        timDisplayed__heading__tim.classList.add("border-on-button")
        timDisplayed.style.display = "block";
        displaySimon.style.display = "none";

    })
}





