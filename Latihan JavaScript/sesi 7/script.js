const dark = document.getElementsByTagName("a")[1];
const body = document.body;

let limit = 3;
let silo = 0;
let reaming;

dark.addEventListener("click", function () {
if (reaming == 1) {
    console.info("kesempatan anda habis");
    return;
}
silo++;
//   for (silo = 0 ;  reaming < limit; silo++) {
//     console.info("kamu klik"+ silo + "x")
//     // return;
//   }
// for (let silo = 0; reaming ==  1 ; silo++) {
//  return;
// }
//   let reaming  = limit - silo;
  console.info("kesempatan ke"+ silo)
  console.info("Kesempatan anda" + reaming)
  body.classList.toggle("dark");
});
