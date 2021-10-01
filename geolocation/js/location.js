let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click", function (position) {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let elLat = document.getElementById("lat")
            let ellong = document.getElementById("long")
            elLat.innerHTML = "Latitude: " + position.coords.latitude
            ellong.innerHTML = "Longitude " + position.coords.longitude
        })
    } else {
        alert("Geolocation is not supported!")
    }
})