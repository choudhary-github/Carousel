const leftButton = document.getElementById("carousel-button-prev");
const rightButton = document.getElementById("carousel-button-next");
const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
let slidePosition = 0;

leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

function slideRight(){
    let prevSlide = slidePosition
    if(slidePosition === totalSlides - 1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    slides[prevSlide].classList.remove("carousel-item-visible");
    slides[slidePosition].classList.add("carousel-item-visible");
}
function slideLeft(){
    let prevSlide = slidePosition
    if(slidePosition === 0){
        slidePosition = totalSlides -1
    }else{
        slidePosition --
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    slides[prevSlide].classList.remove("carousel-item-visible");

}

