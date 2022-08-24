function checkInput() {
    let inputElement = document.getElementById("greetings");
    alert(inputElement.value);

    if (inputElement.value === "red") {
        inputElement.style.border = "2px solid red";
    }
}