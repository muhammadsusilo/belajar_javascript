/*
const p3 = document.querySelector("section#pertama .p3");

function ubahWarna() {
  p2.style.backgroundColor = "Green";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna();

*/

const p4 = document.querySelector("section#kedua p");
p4.addEventListener("click", function() {
    const ul = document.querySelector("section#kedua ul");

    const li = document.createElement("li");
    const liText = document.createTextNode("New Item");

    li.appendChild(liText);
    ul.appendChild(li);
});

const p3 = document.getElementsByClassName("p3")[0];
p3.addEventListener("mouseenter", function() {
    p3.style.backgroundColor = "green";
    p3.style.color = "red";
});

// jika 1 menggunakan ini
// p3.onclick = function(){
//     p3.style.backgroundColor = "green"
// }

// p3.onclick = function(){
//     p3.style.color = "red"
// }