function setupListeners(){
    document.querySelector('.emailButton').addEventListener("click",() => {
        window.location = "mailto:leon@margale.de"
    });
}


export default setupListeners;