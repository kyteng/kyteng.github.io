let checkNowBtn = document.getElementById("check")

checkNowBtn.addEventListener("click", function () {
    var x = document.getElementById("email").value;
    console.log(x);
    document.getElementById("checking").innerHTML = "Checking Record For: " + "<b>" + x + "</b>";
    checkAppointment(x)

})

function checkAppointment(x) {
    let url = 'https://api.sheety.co/03443ce86a7bc8b0c7b9200adcb5654d/appointmentapp/appointments?filter[email]=' + x;
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.appointments);

            let checkAppointmentList = document.getElementById("checkAppointmentList")
            let appointmentId = []

            //delete all rows in the table
            for (let k = checkAppointmentList.rows.length - 1; k > 0; k--) {
                checkAppointmentList.deleteRow(k)
            }

            //load the rows from sheety
            for (let i = 0; i < json.appointments.length; i++) {
                let gEmail = json.appointments[i].email;
                let gName = json.appointments[i].name;
                let gContact = json.appointments[i].contactno;
                let gDtime = json.appointments[i].datetime;
                let gAddress = json.appointments[i].address;
                let gId = json.appointments[i].id;
                let btnId = "delete" + gId;

                let row = checkAppointmentList.insertRow(checkAppointmentList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gEmail
                row.insertCell(2).innerHTML = gName
                row.insertCell(3).innerHTML = gContact
                row.insertCell(4).innerHTML = gDtime
                row.insertCell(5).innerHTML = gAddress
                row.insertCell(6).innerHTML = "<button id='" + btnId + "'type = 'button' class = 'btn btn-danger'> Delete </button>"

                appointmentId.push(btnId)
            }

            for (let j = 0; j < appointmentId.length; j++) {
                let el = document.getElementById(appointmentId[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteAppointment(theId)
                })
            }


        });
}

function DeleteAppointment(id) {
    let url = 'https://api.sheety.co/03443ce86a7bc8b0c7b9200adcb5654d/appointmentapp/appointments/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            var y = document.getElementById("email").value;
            checkAppointment(y)
        });
}