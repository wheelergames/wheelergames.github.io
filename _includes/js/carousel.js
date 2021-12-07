
// Determine the total amount of images in the carousel.
let sliderCount = $("#slider").find(".slider-img li img").length;
// Load images into the carousel
let sliderImg = $("#slider").find(".slider-img");
// Define the navigation arrows and pagination bullets.
let sliderArrow = `<ul class="slider-arrow"><li class="arrow-left" role="button"><i class="fas fa-chevron-left"></i></li><li class="arrow-right" role="button"><i class="fas fa-chevron-right"></i></li></ul>`;
let sliderDotLi = "";
for (let i = 0; i < sliderCount; i++) {
    sliderDotLi += `<li><i class="fas fa-circle"></i></li>`;
}
let sliderDot = `<ul class="slider-dot">${sliderDotLi}</ul>`;
$("#slider").append(sliderArrow + sliderDot);

let activeDefaultCount = $(".slider-dot li.active").length;
if (activeDefaultCount != 1) {
$(".slider-dot li")
    .removeClass()
    .eq(0)
    .addClass("active");
}
let sliderIndex = $(".slider-dot li.active").index();
sliderImg.css("left", -sliderIndex * 100 + "%");

// switch between images
function sliderPos() {
    sliderImg.css("left", -sliderIndex * 100 + "%");
    $(".slider-dot li")
        .removeClass()
        .eq(sliderIndex)
        .addClass("active");
}

$(".arrow-right").click(function() {
    sliderIndex >= sliderCount - 1 ? (sliderIndex = 0) : sliderIndex++;
    sliderPos();
});

$(".arrow-left").click(function() {
    sliderIndex <= 0 ? (sliderIndex = sliderCount - 1) : sliderIndex--;
    sliderPos();
});

$(".slider-dot li").click(function() {
    sliderIndex = $(this).index();
    sliderPos();
});

let goSlider = setInterval(() => { $(".arrow-right").click(); }, 3000);

$("#slider").on({
    mouseenter: () => {
      clearInterval(goSlider);
    },
    mouseleave: () => {
      goSlider = setInterval(() => {
        $(".arrow-right").click();
      }, 3000);
    }
});


/*

let sliderCount = $("#slider").find(".slider-img li img").length;
let sliderImg = $("#slider").find(".slider-img");

let sliderArrow = `<ul class="slider-arrow"><li class="arrow-left" role="button"><i class="fas fa-chevron-left"></i></li><li class="arrow-right" role="button"><i class="fas fa-chevron-right"></i></li></ul>`;
let sliderDotLi = "";
for (let i = 0; i < sliderCount; i++) {
  sliderDotLi += `<li><i class="fas fa-circle"></i></li>`;
}
let sliderDot = `<ul class="slider-dot">${sliderDotLi}</ul>`;
$("#slider").append(sliderArrow + sliderDot);
let activeDefaultCount = $(".slider-dot li.active").length;
  if (activeDefaultCount != 1) {
    $(".slider-dot li")
      .removeClass()
      .eq(0)
      .addClass("active");
  }
let sliderIndex = $(".slider-dot li.active").index();
sliderImg.css("left", -sliderIndex * 100 + "%");

function sliderPos() {
  sliderImg.css("left", -sliderIndex * 100 + "%");
  $(".slider-dot li")
    .removeClass()
    .eq(sliderIndex)
    .addClass("active");
}

$(".arrow-right").click(function() {
  sliderIndex >= sliderCount - 1 ? (sliderIndex = 0) : sliderIndex++;
  sliderPos();
});

$(".arrow-left").click(function() {
  sliderIndex <= 0 ? (sliderIndex = sliderCount - 1) : sliderIndex--;
  sliderPos();
});

$(".slider-dot li").click(function() {
  sliderIndex = $(this).index();
  sliderPos();
});

let go<a href="https://www.jqueryscript.net/slider/">Slider</a> = setInterval(() => {
  $(".arrow-right").click();
}, 3000);

$("#slider").on({
  mouseenter: () => {
    clearInterval(goSlider);
  },
  mouseleave: () => {
    goSlider = setInterval(() => {
      $(".arrow-right").click();
    }, 3000);
  }
});
*/




//
//var slideIndex = 0;
//showDivs(slideIndex);
//carousel();
//var timeout;
//
//function plusDivs(n) {
//  clearTimeout(timeout);
//  showDivs(slideIndex += n);
//}
//
//function showDivs(n) {
//  var i;
//  var x = document.getElementsByClassName("mySlides");
//  if (n > x.length) {
//    slideIndex = 1
//  }
//  if (n < 1) {
//    slideIndex = x.length
//  }
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
//  }
//  x[slideIndex-1].style.display = "block";
//}
//
//
//function carousel() {
//  var i;
//  var x = document.getElementsByClassName("mySlides");
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
//  }
//  slideIndex++;
//  if (slideIndex > x.length) {
//    slideIndex = 1
//  }
//  x[slideIndex-1].style.display = "block";
//  timeout = setTimeout(carousel, 5000); // Change image every 2 seconds
//}