//dom selection
// getelemetby id > element

// const judul = document.getElementById("judul");

// judul.style.color = "white"
// judul.style.backgroundColor = "green";
// judul.innerHTML = "Muhammad Susilo"
// judul.style.fontFamily= "times new roman"

// // document.getElementsByTagName > html colection

// const kedua = document.getElementsByTagName("p");

// kedua[0].style.backgroundColor = "green"

// const h1  = document.getElementsByTagName("h2")[0];

// h1.style.fontSize = "3rem";
 
// // document.getElementsByClassName >html colection

// const p1 = document.getElementsByClassName("p1");

// p1[0].innerHTML ='Belajar'

// // document.querySelector >  element

// const p4 = document.querySelector(".kedua p");

// p4.style.backgroundColor = "orange";
// p4.style.fontSize = "20px";

// const li = document.querySelector("section#kedua ul li:nth-child(2)");

// li.style.backgroundColor = "greenyellow";

// const paragraft = document.querySelector(".kedua p");

// paragraft.innerHTML = "Faqih";
// paragraft.style.color = "black";


// document.querySelectorAll > tipe nodelist

const silo = document.querySelectorAll("p");

silo[2].innerHTML = "Teti Khalifah"
silo[3].style.backgroundColor = "orange"


// node root

const sectionKedua = document.getElementById("kedua");
const p4 = sectionKedua.getElementsByTagName("p")[0];

p4.style.backgroundColor = "blue";
