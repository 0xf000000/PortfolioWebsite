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
typeStatement();