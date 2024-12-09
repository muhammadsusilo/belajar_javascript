// callback
// synchronous Callback

function hai(nama) {
    alert(`Halo, ${nama}`)
}

function muncul(call) {
    const names = prompt(`Masukkan Nama:`);
    call(names);
}

muncul(hai => alert(`Perkenalkan : ${hai}`));;

const siswa = [{
    "nama": "Muhammad Susilo",
    "jurusan": "Teknik Komputer dan Jaringan",
    "Sekolah": " SMK Bina Nusa Slawi"
}, {
    "nama": " Angga",
    "jurusan": "Teknik Komputer",
    "Sekolah": " SMK Bina Bangsa"
}]
siswa.forEach(m => console.info(m.Sekolah));