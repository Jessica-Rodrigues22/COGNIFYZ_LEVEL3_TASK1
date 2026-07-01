// Change Gallery Image

function changeImage(src){

document.getElementById("mainImage").src = src;

}

// Automatic Slideshow

const slideshowImages = [

"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg",
"img5.jpg"

];

let currentIndex = 0;

function autoSlide(){

currentIndex++;

if(currentIndex >= slideshowImages.length){

currentIndex = 0;

}

document.getElementById("slideImage").src =
slideshowImages[currentIndex];

}

setInterval(autoSlide,3000);