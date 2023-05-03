cartNumber= localStorage.getItem
var storedItem = localStorage.getItem("storedItem");
 
var stock = new Array(3);
var cartNumber = 0;

function store() {
    var package1 = stock[0];
    var package2 = stock[1];
    var package3 = stock[2];
    //var cartNumber = document.getElementById("cartNo").value;
    

    document.getElementById("cartNo").innerHTML = cartNumber+"";

    //cartNumber++;
    //document.getElementById("cartNo").innerHTML = cartNumber+"";


}
function checkOut () {
    cartNumber++;
    document.getElementById("cartNo").innerHTML = cartNumber+"";
    var shoppingCrt=true;
    //window.open("payement.html");
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}