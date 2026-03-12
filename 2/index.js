const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("P A L I N D R R O N E")
    } else {
        alert("Not today")
    }
    
    input.value = ""

}