// function dataSiswa(url, success, error) {
//     let ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = function() {
//         if (ajax.status === 200) {
//             if (ajax.readyState === 4) {
//                 success(ajax.response);
//             } else if (ajax.status === 404) {
//                 error(ajax.responseText);
//             }
//         }
//     }

//     ajax.open('get', url);
// ajax.send();






// promise
//object yang mempresentasikan keberhasilan/ kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji(terpenuhi / ingkar)
// states (fulfiled / rejected /pending)
// callback (resolve / reject / finally)
// aksi(then / catch)


// contoh 1
let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati')
//     } else {
//         reject('Ingkar Janji')
//     }
// });

// console.info(janji1)

// janji1
//     .then(response => console.info(`OK :` + response))
//     .catch(response => console.info(`NOT OK :` + response))

// contoh 2

const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!')
        }, 3000)
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberapa waktu!')
        }, 2000)
    }
});

console.info("start");
console.info(janji2
    .then(() => console.info(janji2))
);
console.info("end");
console.info("Terima Kasih telah menunggu");