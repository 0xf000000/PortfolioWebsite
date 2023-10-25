// Observer for the elements to appear
function handleIntersection(entries, observer){
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            
            entry.target.classList.remove('visible');
            entry.target.classList.add('Observed');
            observer.unobserve(entry.target);
        }
    });

}




export default handleIntersection;