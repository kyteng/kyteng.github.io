let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let bookEmail = document.getElementById("email")
    let emailVal = bookEmail.value

    let bookName = document.getElementById("name")
    let nameVal = bookName.value

    let bookContact = document.getElementById("contact")
    let contactVal = bookContact.value

    let bookDatetime = document.getElementById("datetime")
    let datetieVal = bookDatetime.value

    let bookAddress = document.getElementById("address")
    let addressVal = bookAddress.value

    BookNow(emailVal, nameVal, contactVal, datetieVal, addressVal)
})

function BookNow(bookEmail, bookName, bookContact, bookDatetime, bookAddress) {
    let url = 'https://api.sheety.co/03443ce86a7bc8b0c7b9200adcb5654d/appointmentapp/appointments';
    let body = {
        appointment: {
            email: bookEmail,
            name: bookName,
            contactno: bookContact,
            datetime: bookDatetime,
            address: bookAddress
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.appointment);
            alert("Appointment made, please check your appointment with your email: " + json.appointment.email)
        });

}