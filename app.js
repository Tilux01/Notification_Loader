const container = document.querySelector(".container")
const SuccessMsg = "Successfully done !"
const ErrorMsg = "Error encountered !"
const WarningMsg = "Warning, Try again !"
const SuccessClass = "Success"
const ErrorClass = "Error"
const WarningClass = "Warning"
function notification(message, className) {
    let newDiv = document.createElement("div")
    newDiv.classList.add(className)
    newDiv.innerHTML= message
    container.appendChild(newDiv)
    setTimeout(() => {
        container.removeChild(newDiv)
    }, 5000);
}  