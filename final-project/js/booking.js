let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value
    let emailVal = email.value

    let name = document.getElementById("name").value
    let nameVal = name.value

    let contact = document.getElementById("contact").value
    let contactVal = contact.value

    let datetime = document.getElementById("datetime").value
    let datetieVal = datetime.value

    let address = document.getElementById("address").value
    let addressVal = address.value

    BookNow(emailVal, nameVal, contactVal, datetieVal, addressVal)
})

function BookNow(email, name, contact, datetime, address) {
    let url = 'https://api.sheety.co/03443ce86a7bc8b0c7b9200adcb5654d/appointmentapp/appointments';
    let body = {
        appointment: {
            email: email,
            name: name,
            contactno: contact,
            datetime: datetime,
            address: address
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.appointment);
            alert("Appointment made, please check your appointment with your email: " + email.value)
        });

}