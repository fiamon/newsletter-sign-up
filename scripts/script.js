const button = document.getElementById("subscribe")
const email = document.getElementById("emailAddress")
const error = document.getElementById("error")
const section = document.getElementById("confirm")
const main = document.getElementById("main")
const customerEmail = document.getElementById("customerEmail")
const back = document.getElementById("back")

// events
button.addEventListener("click", () => {
    if (!email.value.includes("@")) {
        email.style.backgroundColor = "#ff625779",
        email.style.color = "red",
        errorView()
    } else {
        nextPage()
    }
})

back.addEventListener("click", () => {
    section.classList.add("none")
    main.classList.remove("none")
})

email.addEventListener("change", () => {
    customerEmail.innerText = email.value
})

//functions
function errorView () {
    error.classList.remove("none")
}

function nextPage () {
    section.classList.remove("none")
    main.classList.add("none")
}