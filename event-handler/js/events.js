function transformUppercase(_val) {
    return _val.toUpperCase();
}

//DOM event listen
let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup", function () {
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword() {
    let elKatalaluan = document.getElementById("kataLaluan")
    let pass_val = elKatalaluan.value

    if (pass_val.length > 5) {
        alert("Password check...OK!")
    } else {
        alert("Password too short!")
    }
}


//traditional DOM Event Handler
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword
