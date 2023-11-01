
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

const slidesContainer = document.getElementById("slides-container");

const slide = document.querySelector(".slide");

const prevButton = document.getElementById("slide-arrow-prev");

const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {

  const slideWidth = slide.clientWidth;

  slidesContainer.scrollLeft += slideWidth;

});

prevButton.addEventListener("click", () => {

  const slideWidth = slide.clientWidth;

  slidesContainer.scrollLeft -= slideWidth;

});










// function to change the TABS







