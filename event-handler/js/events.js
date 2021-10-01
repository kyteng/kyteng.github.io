function transformUppercase(_val) {
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namePengguna")
elNamaPengguna.addEventListener("keyup", function () {
    elNamaPengugna.value = transformUppercase(elNamaPengguna.value)
})