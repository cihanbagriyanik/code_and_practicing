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

// //? Here is the list for storge
// const list = JSON.parse(localStorage.getItem("LIST")) || [];

// //? Variables
// const input = document.getElementById("input-box")
// const button = document.querySelector(".button")
// const listContainer = document.getElementById("list-container")


// //? When you push the button
// button.onclick = () => {
//     if (!input.value) {
//         alert("Please firstly enter one task")
//     } else if (list.includes(input.value)) {
//         alert("You have already this task")
//     } else {
//         list.push(input.value)
//         // console.log(list);

//         //? When you enter the task to the list, update the list 
//         localStorage.setItem("LIST", JSON.stringify(list))


//         // console.log(list);
        
//         input.focus();
    
//         //? After enter the value return empty input
//         input.value = ""

//         showList();

//     }

// }

// const showList = () => {
    
//     //? Clear the last input in data
//     listContainer.innerHTML = "";
    
//     for (let i = 0; i < list.length; i++) {
//         const li = document.createElement("li");
//         li.textContent = list[i];
        
//         const span = document.createElement("span");
//         span.textContent = "\u00d7";
        
//         li.appendChild(span);
//         listContainer.appendChild(li);
        
//     }
    
//     remove();
//     // check();
// }


// const remove = () => {

//     document.querySelectorAll("span").forEach((span) => {
//         span.addEventListener("click", () => {
            
//              //? change to 'span'
//             span.parentElement.remove();

//             let taskText = span.parentElement.textContent;
//             let taskIndex = list.indexOf(taskText);
//             console.log(span.parentElement.textContent);
            
//             //? delete the task from list
//            list.splice(taskIndex,1)
        
            
//             //? save the updated version of list
//             localStorage.setItem("LIST", JSON.stringify(list)); 
//             showList(); // Görevleri güncel liste ile tekrar göster
            
//         });
//     });
// };


// listContainer.addEventListener("click", function(e){
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked")
        
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
        
//     }
// }, false)


// showList();


/* -------------------------------------------------------------------------- */


//? Here is the list for storge
const list = JSON.parse(localStorage.getItem("LIST")) || [];

//? Variables
const input = document.getElementById("input-box");
const button = document.querySelector(".button");
const listContainer = document.getElementById("list-container");

//? When you push the button
button.onclick = () => {
  if (!input.value) {
    alert("Please firstly enter one task");
  } else if (list.includes(input.value)) {
    alert("You have already this task");
  } else {
    list.push(input.value);
    // console.log(list);

    //? When you enter the task to the list, update the list
    localStorage.setItem("LIST", JSON.stringify(list));

    // console.log(list);

    input.focus();

    //? After enter the value return empty input
    input.value = "";

    showList();
  }
};

// const showList = () => {
//   //? Clear the last input in data
//   listContainer.innerHTML = "";

//   for (let i = 0; i < list.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = list[i];

//     const span = document.createElement("span");
//     span.textContent = "\u00d7";

//     li.appendChild(span);
   
//     listContainer.appendChild(li);
//   }

//   remove();
//   // check();
// };

// const getSymbolForItem = (index) => {
//     // Özel bir mantıkla her öğe için farklı bir simge döndürün
//     // Burada farklı durumlara göre farklı simgeler döndürebilirsiniz
//     return "\u00d7"; // Örneğin, 'x' işareti
// };

const showList = () => {
  listContainer.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    li.textContent = list[i];

    const span = document.createElement("span");
    const symbol = getSymbolForItem(i); // Her öğe için farklı bir simge alın

    span.textContent = symbol; // Sembolü ekleyin

    li.appendChild(span); // <span> öğesini <li> içine yerleştirin

    listContainer.appendChild(li);
  }

  remove();
};

// Bu fonksiyon her öğe için farklı bir simge döndürür
// Duruma veya öğenin özelliklerine göre farklı simgeler döndürebilirsiniz
const getSymbolForItem = (index) => {
    // Özel bir mantıkla her öğe için farklı bir simge döndürün
    // Burada farklı durumlara göre farklı simgeler döndürebilirsiniz
    return "\u00d7"; // Örneğin, 'x' işareti
};


const remove = () => {
  document.querySelectorAll("span").forEach((span) => {
    span.addEventListener("click", () => {
      // console.log("here we go");
      //? change to 'span'
      span.parentElement.remove();
console.log(span.parentElement);
      let taskText = span.parentElement.textContent;
      let taskIndex = list.indexOf(taskText);
      console.log(taskText);//! inputa a yazıyorum, taskText ax oluyor, x li nin içindeki span den, dolayısıyla taskIndex -1 çıkıyor o da bulamayınca sondan siliyor
console.log(taskIndex);
      //? delete the task from list
      list.splice(taskIndex, 1);
      //? save the updated version of list
      console.log(list);
      localStorage.setItem("LIST", JSON.stringify(list));
      showList(); //? Updated task show again
    });
  });
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

showList();
