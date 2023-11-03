const btnSubscribe = document.getElementById("btnSubscribe");
const thanksContainer = document.getElementById("thanksContainer")
const mainContainer = document.getElementById("mainContainer")
btnSubscribe.addEventListener('click', function(e){
    thanksContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
})