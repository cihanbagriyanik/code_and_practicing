const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let x = []
// localStorage.clear();

function addTask() {
    if (inputBox.value === "") {
        alert("First you must write something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    x.push(inputBox.value)
    inputBox.value = ""
    saveData(x);
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData(x)
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(x)
    }
}, false)

function  saveData(x) {
    localStorage.setItem("data", x);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();