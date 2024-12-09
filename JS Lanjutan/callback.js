// Asynchrounousn callback

function dataSiswa(url, success, error) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                success(ajax.responsete);
            } else if (ajax.status === 404) {
                error();
            }
        }
    }

    ajax.open('get', url);
    ajax.send();
}

console.info("start")
dataSiswa(`siswa.json `, results => {
    const siswa = JSON.parse(results);
    siswa.forEach(m => console.info(m.nama));
    // console.info(JSON.parse(results))
}, () => {

});
console.info("finish");