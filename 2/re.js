const input = document.getElementById("input")

function reverseWord(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reverseWord(value)

    if (value === reverse) {
        alert("PALINDROME")
    } else {
        alert("Not today")
    }

    input.value = ""
}

const reverseWord = (str) => return str.split("").reversse().join("")