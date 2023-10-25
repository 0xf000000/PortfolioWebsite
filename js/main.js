
import typeStatement from "./typestatement.js";
import handleIntersection from "./observer.js";
import setupEventlistener from "./eventListener.js"
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



setupEventlistener();
setupObserver();












// function to change the TABS







