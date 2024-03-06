let data = {username: "", password: ""}
let username = document.getElementById("username")
let password = document.getElementById("password")
let storedData = JSON.parse(localStorage.getItem("UserData"))

function logOut() {
    localStorage.clear()
}

let deleteIcon = document.getElementById("delete")
let searchBar = document.getElementById("search-bar")


if (deleteIcon && searchBar) {
    setInterval(() => {
        if (searchBar.value.length > 0) {
            deleteIcon.style.display = "block"
        }
        else{
            deleteIcon.style.display = "none"
        }
    }, 10);
}


function deleteText(inputField) {
    inputField.value = ""
}

let guiName = document.getElementById("profile-name")

guiName.innerHTML = storedData.username
if (username && password) {
    username.value = storedData.username || ""
    password.value = storedData.password || ""
}



function setLogin() {
    data.username = document.getElementById("username").value
    data.password = document.getElementById("password").value
    localStorage.setItem("UserData", JSON.stringify(data))
    storedData = JSON.parse(localStorage.getItem("UserData"))
    guiName.innerHTML = storedData.username
}