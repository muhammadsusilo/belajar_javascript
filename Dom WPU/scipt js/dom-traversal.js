// Dom Selection
/*const close = document.getElementsByClassName("close")[0];
const kartu = document.getElementsByClassName("kartu")[0];

close.addEventListener("click", function(){
    kartu.style.display = "none"
})
*/

// Dom Traversal

const close = document.querySelectorAll(".close");
/*
for (let i = 0; i <close.length; i++){
    close[i].addEventListener("click", function(e){
        // close[i].parentElement.style.display = "none"

        e.target.parentElement.style.display = "none"
    })
}
*/
close.forEach(function(el) {
    el.addEventListener("click", function(e) {
        e.target.parentElement.style.display = "none"
    })
});


const nama = document.querySelector(".nama");
// console.log(nama.parentElement.parentElement) / orang tua atau induk naik satu naik satu

// console.log(nama.prentElement)
// console.log(nama.parentNode) 
// console.log(nama.nextSibling)
// console.log(nama.nextElementSibling)
// console.log(nama.previousElementSibling)