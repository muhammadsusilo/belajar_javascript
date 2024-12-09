// const latihan = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("selesai")

//     }, 7000);
// })


// console.info("mulai");
// latihan.then(() => console.info(latihan));
// console.info("end");

function latihanCoba() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("selesai")

        }, 2000);
    })
}

// const latihan = latihanCoba();
// latihan.then(() => console.info(latihan));

async function latihanasync() {
    const latihan = await latihanCoba();
    console.info(latihan)
}

latihanasync();