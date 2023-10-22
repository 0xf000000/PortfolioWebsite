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
            entry.target.classList.remove('beforeObserved');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });

}

const observer = new IntersectionObserver(handleIntersection,{
    root:null,
    rootMargin:'0px',
    threshold: 0.2,
});

const listWrapper = document.querySelector('.beforeObserved');

// Start observing the element
if (listWrapper) {
  observer.observe(listWrapper);
}