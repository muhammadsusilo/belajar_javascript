/*
// buat element baru
const p = document.createElement('p');
const pText = document.createTextNode('Paragraf New');

//simpan tulisan yang ada paragraft
p.appendChild(pText);

//pindahkan p ke section pertama
const sectionPertama =document.getElementById("pertama");

sectionPertama.appendChild(p);

//appenchild menyimpan diakhir


// // cara menambahkan item baru di tengah
const li = document.createElement("li");
const itemTengah = document.createTextNode("Item Tengah");

li.appendChild(itemTengah);

const sectionKedua = document.querySelector("section#kedua ul");
const liKedua = sectionKedua.querySelector("section#kedua ul li:nth-child(2)");

sectionKedua.insertBefore( li, liKedua)

*/
// // remove
// const link = document.querySelector("a")[0];

// sectionPertama.removeChild(link);

// //replace

const silo = document.getElementById("kedua");
const p4 = silo.querySelector(" p");

const h2Baru = document.createElement("h2");
const h2Text = document.createTextNode("Halaman Baru");

h2Baru.appendChild(h2Text);

silo.replaceChild(h2Baru, p4);

h2Baru.style.backgroundColor = "green"
