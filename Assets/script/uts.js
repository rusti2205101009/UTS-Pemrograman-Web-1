function tampilUmroh(menu) {
    let infoText = "";

    if (menu == 'Paket Reguler') {
        infoText = 'Anda memilih Paket Reguler untuk Umroh dengan kisaran harga 20 - 25 juta, yang akan dilakukan selama 9 - 13 hari di Tanah Suci Makkah.'
    } else if (menu == 'Paket Plus'){
        infoText = 'Anda memilih Paket Plus untuk Umroh dengan kisaran harga 28 - 35 juta, yang akan dilakukan selama 9 - 13 hari di Tanah Suci Makkah.';
    } else if (menu == 'Paket VIP') {
        infoText = 'Anda memilih Paket VIP untuk Umroh dengan kisaran harga 37 - 40 juta, yang akan dilakukan selama 9 - 13 hari di Tanah Suci Makkah.';
    }

    alert('Informasi : ' +menu+ '\n' + infoText);
}

function tampilHaji(menu2) {
    let infoText = "";

    if (menu2 == 'Paket Reguler') {
        infoText = 'Anda memilih Paket Reguler Untuk Haji dengan kisaran harga 40 - 50 juta, yang akan dilakukan selama 40 hari di Tanah Suci Makkah.'
    } else if (menu2 == 'Paket Plus'){
        infoText = 'Anda memilih Paket Plus Untuk Haji dengan kisaran harga 119 juta, yang akan dilakukan selama 25 hari di Tanah Suci Makkah.';
    } else if (menu2 == 'Paket Furoda') {
        infoText = 'Anda memilih Paket Furoda Untuk Haji dengan kisaran harga 231 juta, yang akan dilakukan selama 16 - 24 hari di Tanah Suci Makkah.';
    }

    alert('Informasi : ' +menu2+ '\n' + infoText);
}

function tampilBtn(btn) {
    alert("Terima Kasih telah memilih Budaltravel. Silahkan hubungi nomor kami di WA 0800-123-789 untuk konsultasi lebih lanjut.")
}

function login() {
    var user = prompt("Masukkan Username : ");
    var pass = prompt("Masukkan Password : ");

    if (user && pass) {
        alert("Anda Berhasil Login.");
    } else {
        alert("Login Gagal. Silahkan cek kembali username dan password anda.")
    }
}

function signup() {
    var userBaru = prompt("Masukkan Username : ");
    var passBaru = prompt("Masukkan Password : ");

    if (userBaru && passBaru) {
        alert("Anda Berhasil Membuat Akun.");
    } else {
        alert("Membuat Akun Gagal. Silahkan cek kembali username dan password anda.")
    }
}
