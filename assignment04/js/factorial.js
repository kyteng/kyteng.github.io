let count = document.getElementById("btnFactorial")

count.addEventListener("click", function () {
    let num = document.getElementById("number").value
    result = factorial(num)
    document.getElementById("res").innerHTML = "The factorial of the number " + num + " is: " + result;
})

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}