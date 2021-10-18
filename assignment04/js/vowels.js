// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    alert(count + " vowel found.")
    document.getElementById("res").innerHTML = count + " vowel found";
}

// take input
let check = document.getElementById("btnCheck")

check.addEventListener("click", function () {
    const string = document.getElementById("inputtext").value;
    countVowel(string)
})

