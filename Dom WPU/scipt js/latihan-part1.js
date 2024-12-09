const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    //body.style.backgroundColor = "green"
    // body.setAttribute("class", "green")
    document.body.classList.toggle("green");
})