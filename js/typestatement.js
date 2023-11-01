import sleep from "./sleep.js";

async  function typeStatement() {
    let i = 0;
    let statement = "Hey, Leon here."
    const introductionElement = document.querySelector(".introduction");
    introductionElement.innerHTML =  " <div class ='inline'> </div> <span class='cursor'></span>";

    while(i < statement.length){
        await sleep(170);
        let position = introductionElement.innerHTML.indexOf("<span");
        let char = statement.charAt(i);

        
            introductionElement.innerHTML = introductionElement.innerHTML.slice(0, position) + char + introductionElement.innerHTML.slice(position);
       
        

        
        i++;
        
    }
  
}

export default typeStatement;