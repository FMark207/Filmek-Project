let data = {username: "", password: ""}
let storedData = JSON.parse(localStorage.getItem("UserData"))

let guiName = document.getElementById("profile-name")

document.getElementById("username").value = storedData.username
document.getElementById("password").value = storedData.password
guiName.innerHTML = storedData.username

function setLogin() {
    data.username = document.getElementById("username").value
    data.password = document.getElementById("password").value
    guiName.innerHTML = document.getElementById("username").value
    console.log(data.username, data.password);
    localStorage.setItem("UserData", JSON.stringify(data))
}

