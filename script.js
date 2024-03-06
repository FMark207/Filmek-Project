let data = {username: "", password: ""}
let username = document.getElementById("username")
let password = document.getElementById("password")

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

let storedData = JSON.parse(localStorage.getItem("UserData"))

let deleteIcon = document.getElementById("delete")
let searchBar = document.getElementById("search-bar")



setInterval(() => {
    if (searchBar.value.length > 0) {
        deleteIcon.style.display = "block"
    }
    else{
        deleteIcon.style.display = "none"
    }
}, 10);

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