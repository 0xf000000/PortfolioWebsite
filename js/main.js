
import typeStatement from "./typestatement.js";
import handleIntersection from "./observer.js";
import {setupEventlistener, setupSmothScrolling} from "./eventListener.js"
// Start typing when the page loads
setTimeout(typeStatement,300 );


// quick event listener to handle the email redirection


let setupObserver = () => {

    const observer = new IntersectionObserver(handleIntersection,{
        root:null,
        rootMargin:'0px',
        threshold: 0.2,
    });
    
    let listWrapper = document.getElementsByClassName('visible')
    
    // Start observing the element
    if (listWrapper) {
        for(let i = 0; i < listWrapper.length; i++){
            
            observer.observe(listWrapper[i]) ;
        }
      
    }
    
}




setupSmothScrolling();
setupEventlistener();
setupObserver();


// Slideshow --

let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1;}
    if(n < 1 ){slideIndex = slides.length;}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";
      slides[slideIndex-1].style.right = 0;
      slides[slideIndex-1].style.transition = 2;
  dots[slideIndex-1].className += " active";
}

function plusSlides(n){
    showSlides(slideIndex +=n);
}

function currentSlide(n){
    showSlides(slideIndex =  n);
}

document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1);

})

document.querySelector(".next").addEventListener("click", () => {
    plusSlides(1);

})

let dots = document.getElementsByClassName('dot');

for( let i = 0; i < dots.length;i++){
    
    dots[i].addEventListener("click", () => {
        currentSlide(i +1);
    });

}












// function to change the TABS







