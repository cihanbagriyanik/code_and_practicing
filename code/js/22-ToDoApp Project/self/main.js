// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// // let x = []
// // localStorage.clear();

// function addTask() {
//     if (inputBox.value === "") {
//         alert("First you must write something!")
//     } else {
//         let li = document.createElement("li")
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li)
//         let span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         li.appendChild(span)
//     }
//     // x.push(inputBox.value)
//     inputBox.value = ""
//     saveData();
// }

// listContainer.addEventListener("click", function(e){
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked")
//         saveData()
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData()
//     }
// }, false)

// function  saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// showTask();

//* -------------------------------------------------------------------------- */

//? Here is the list for storge
const list = JSON.parse(localStorage.getItem("LIST")) || [];

//? Variables
const input = document.getElementById("input-box")
const button = document.querySelector(".button")
const listContainer = document.getElementById("list-container")


//? When you push the button
button.onclick = () => {
    if (!input.value) {
        alert("Please firstly enter one task")
    } else if (list.includes(input.value)) {
        alert("You have already this task")
    } else {
        list.push(input.value)
        // console.log(list);

        //? When you enter the task to the list, update the list 
        localStorage.setItem("LIST", JSON.stringify(list))


        // console.log(list);

        showList();

        input.focus();

        //? After enter the value return empty input
        input.value = ""



    }



}

const showList = () => {
    // Temizleme
    listContainer.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const li = document.createElement("li");
        li.textContent = list[i];

        const span = document.createElement("span");
        span.textContent = "\u00d7";

        li.appendChild(span);
        listContainer.appendChild(li);
    }

    remove();
    check();
}



const remove = () => {
    document.querySelectorAll("span").forEach((span) => { // 'span' olarak değiştirildi
        span.addEventListener("click", () => {
            // console.log("here we go");
            span.parentElement.remove(); // 'span' olarak değiştirildi

            let taskText = span.parentElement.textContent;
            let taskIndex = list.indexOf(taskText);

            list.splice(taskIndex, 1); // Görevi listeden kaldır
            localStorage.setItem("LIST", JSON.stringify(list)); // Güncel liste verisini sakla
            showList(); // Görevleri güncel liste ile tekrar göster

        });
    });
};



const check = () => {
    const listItemBefores = document.querySelectorAll('ul li::before');
    listItemBefores.forEach((before, index) => {
        before.addEventListener("click", () => {
            // Görevin durumunu değiştir
            list[index].checked = !list[index].checked;

            // Görseli güncelle
            if (list[index].checked) {
                before.style.backgroundImage = 'url(checked.png)';
            } else {
                before.style.backgroundImage = 'url(unchecked.png)';
            }

            localStorage.setItem("LIST", JSON.stringify(list)); // Güncel liste verisini sakla
        });
    });
};


// const check = () => {

//     document.querySelector('ul li::before').forEach((a) => {
//         a.onclick = () => {
//             console.log("here we go");
//             // a.parentElement.();


//         }
//     })

// }

showList();
