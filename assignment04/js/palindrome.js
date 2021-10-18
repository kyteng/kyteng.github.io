function palindrome(string) {
    // convert the string into an array using the string.split() function
    const arrValue = string.split(''); // 

    // use reverse() method to reverse the array values
    const reveArrVal = arrValue.reverse();

    // use join() method to group the array values into the string
    const revString = reveArrVal.join('');

    if (string == revString) // if string condition is equal to the revString
    {
        alert('It is a Palindrome'); // print the Palindrome
        document.getElementById("res").innerHTML = string + " is a Palindrome";
    }
    else {
        alert(' It is not a Palindrome'); // if the condition is not true.
        document.getElementById("res").innerHTML = string + " is not a Palindrome";
    }
}
// take a string from the user

let check = document.getElementById("btnCheck")

check.addEventListener("click", function () {
    const string = document.getElementById("inputtext").value;
    palindrome(string)
})