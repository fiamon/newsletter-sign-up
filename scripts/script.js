const button = document.getElementById("subscribe")
const email = document.getElementById("emailAddress")
const error = document.getElementById("error")
const section = document.getElementById("confirm")
const main = document.getElementById("main")

console.log(section)

button.addEventListener("click", () => {
    if (!email.value.includes("@")) {
        email.style.backgroundColor = "#ff625779",
        email.style.color = "red",
        errorView()
    } else {
        nextPage()
    }
})

function errorView () {
    error.classList.remove("none")
}

function nextPage () {
    section.classList.remove("none")
    main.classList.add("none")
}
