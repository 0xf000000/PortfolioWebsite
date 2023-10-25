
import typeStatement from "./typestatement.js";
import handleIntersection from "./observer.js";
import setupListeners from "./eventListener.js";

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

function setupTabEventlistener(){
    let buttons = document.getElementsByClassName("tablinks");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        changeTab(buttons[i].id,buttons[i].innerText);
    });

}
}

setupListeners();
setupTabEventlistener();
setupObserver();


document.querySelector('.emailButton').addEventListener("click",() => {
    window.location = "mailto:leon@margale.de"
});









// function to change the TABS
function changeTab(clickedButton, workingName){

    let active = document.querySelector('.active');

   
    active.style.color = '#ccc';
    active.classList.remove('active');
    

    let button = document.getElementById(clickedButton);
    button.style.color = '#44f0b6';
    gsap.to(button, {
        duration: 0.2, // Duration of the flash
        backgroundColor: "#44f0b6", // Target background color
        repeat: 1, // Repeat the animation twice
        yoyo: true, // Reverse the animation
        onComplete: () => {
            button.style.backgroundColor = '#0a192f'; // Reset the background color
        }
    });


    
    button.classList.add('active');


    let tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";

    }


    document.getElementById(workingName).style.display = 'block';
    

}





