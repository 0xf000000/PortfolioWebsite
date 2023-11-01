import sleep from "./sleep.js";
// Observer for the elements to appear
async function handleIntersection(entries, observer){

    for (const entry of entries){

        if(entry.isIntersecting){
           await sleep(300);
            
           entry.target.classList.remove('visible');
            entry.target.classList.add('Observed');

             
             observer.unobserve(entry.target);
         }

    } 


   

}




export default handleIntersection;