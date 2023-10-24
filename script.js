
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  let statement = "Hey, Leon here."
  const introductionElement = document.querySelector(".introduction");
  introductionElement.innerHTML =  " <div class ='inline'> </div> <span class='cursor'></span>";

  let leonElement = document.querySelector('.inline');
 async  function typeStatement() {
    let i = 0;
    while(i < statement.length){
        await sleep(100);
        let position = introductionElement.innerHTML.indexOf("<span");
        let char = statement.charAt(i);

        
            introductionElement.innerHTML = introductionElement.innerHTML.slice(0, position) + char + introductionElement.innerHTML.slice(position);
       
        

        
        i++;
        
    }
  
}

// Start typing when the page loads
setTimeout(typeStatement,300 );


// BUTTON

function redirectToMail(){

    window.location = "mailto:leon@margale.de"
}


let buttonElement = document.querySelector('.emailButton');

buttonElement.addEventListener("click",redirectToMail);



// Observer for the elements to appear

function handleIntersection(entries, observer){
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            sleep(3000);
            entry.target.classList.remove('visible');
            entry.target.classList.add('Observed');
            observer.unobserve(entry.target);
        }
    });

}

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

let buttons = document.getElementsByClassName("tablinks");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        changeTab(buttons[i].id,buttons[i].innerText);
    });

}





// function to change the TABS
function changeTab(clickedButton, workingName){

    let active = document.getElementsByClassName('active');

   
    active[0].style.color = '#ccc';
    active[0].classList.remove('active');
    

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






