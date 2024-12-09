/*const close = document.querySelectorAll(".close");
close.forEach(function(el) {
    el.addEventListener("click", function(e){
       e.target.parentElement.style.display = "none"
       e.preventDefault();
       e.stopPropagation();
    })
});
// js tolong carikan element dengan selector kartu
const kartu = document.querySelectorAll(".kartu")
kartu.forEach(function(kartu){
    kartu.addEventListener("click", function(e) {
        alert("ok")
    })
})

*/

const container = document.querySelector(".container");

container.addEventListener("click", function(e) {
    // console.log(e.target)
    if (e.target.className == "close") {
        e.target.parentElement.style.display = "none"
        e.preventDefault();
    }
})