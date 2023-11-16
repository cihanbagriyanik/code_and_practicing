
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

const showList = () => {

  //? Clear the last input in data
  listContainer.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    li.textContent = list[i];

    const span = document.createElement("span");
    const symbol = getSymbolForItem(i); 

    span.textContent = symbol; // add symbol

    li.appendChild(span); // <span> placed into to the <li> 

    listContainer.appendChild(li);
  }

  remove();
};


const getSymbolForItem = (index) => {
  // we can do here for every different situation different symbol
  return "\u00d7"; // exmp. 'x' symbol
};


const remove = () => {
  document.querySelectorAll("span").forEach((span) => {
    span.addEventListener("click", () => {
      // console.log("here we go");
      //? change to 'span'
      span.parentElement.remove();
      console.log(span.parentElement);
      let taskText = span.parentElement.textContent;
      let taskIndex = list.indexOf(taskText.slice(0, taskText.length - 1));
      console.log(taskText);
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
