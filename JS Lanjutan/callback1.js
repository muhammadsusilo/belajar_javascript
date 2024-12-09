console.info("start");

$.ajax({
    url: `siswa.json`,
    success: (swa) => {
        console.info(swa);
    },
    error: () => {

    }
});
console.info("finish");