//! * ------- Selectors ------- */

const selectionArticle = document.querySelector(".selection");

const yourCoiceDiv = document.getElementById("your-choice");
const pcCoiceDiv = document.getElementById("pc-choice");

// Score 
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")
const domTopScore = document.getElementById("top-score")

// Modal 
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainButton = document.getElementById("play-again")

//! * ------- Variables ------- */

const userSelectImg = document.createElement("img");
const pcSelectImg = document.createElement("img");
let pcRandom;
let pcArr;

// message
const messagePar = document.querySelector(".message")

// Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";



//! * ------- Event Listeners ------- */

selectionArticle.addEventListener("click", (e) => {
    
    // console.log(e.target.id)
    
    if (e.target.id) {
        userSelectImg.src = `./img/${e.target.id}.png`;
        userSelectImg.alt = `${e.target.id}`;
        yourCoiceDiv.appendChild(userSelectImg);
        createPcSelection()
    }
});

playAgainButton.addEventListener('click', () => {
    // modalCardSection.classList.toggle("show")
    // modalCardSection.classList.toggle("remove")

    modalCardSection.style.display = "none"
    window.location.reload()

})

//! * ------- Functions ------- */

const createPcSelection = () => {
    
        pcArr = ["rock", "paper", "scissor"]
        pcRandom = pcArr[Math.trunc(Math.random()*3)]
        pcSelectImg.src = `./img/${pcRandom}.png`
        pcRandom = "rock"
        pcSelectImg.alt = pcRandom
        pcCoiceDiv.appendChild(pcSelectImg)
        calculateResult()
}




const calculateResult = () => {
    console.log(userSelectImg.alt)
    console.log(pcRandom)
    // Eşitlik Durumu
    if (userSelectImg.alt == pcRandom) {
        draw()
    }else{
        if (userSelectImg.alt === "rock") {
            pcRandom === "paper" ? youLost() : youWin()
        }else if(userSelectImg.alt === "scissor") {
            pcRandom === "rock" ? youLost() : youWin()
        }else if(userSelectImg.alt === "paper") {
            pcRandom === "scissor" ? youLost() : youWin()
        }
    }

    if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
        openModal()
    }
}

const draw = () => {
        messagePar.textContent = "it' a draw"
        scoreCardSection.style.color = YELLOW
        messagePar.style.backgroundColor = YELLOW
}
const youLost = () => {
        messagePar.textContent = "You Lost"
        scoreCardSection.style.color = RED
        messagePar.style.backgroundColor = RED
        pcScoreSpan.textContent++
}
const youWin = () => {
        messagePar.textContent = "You Win"
        scoreCardSection.style.color = GREEN
        messagePar.style.backgroundColor = GREEN
        yourScoreSpan.textContent++
}

const openModal = () => {
    modalCardSection.classList.add("show")

    if (yourScoreSpan.textContent === "10") {
        finalMessagePar.textContent = "You win"
        document.querySelector(".modal").style.backgroundColor = GREEN
        // console.log("you")
        playAgainButton.style.color = GREEN
    }
    else {
        finalMessagePar.textContent = "You Lost"
        document.querySelector(".modal").style.backgroundColor = RED
        // console.log("pc")
        playAgainButton.style.color = RED
    }
}

// local storage Veri yazma okuma 

// localStorage.setItem("high-Score", 10)
// let a = localStorage.getItem("high-Score")

// console.log(a)














//! ilkel

// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")

// rockImg.addEventListener('click', () =>{
//     userSelectImg.src = "./img/rock.png"
//     userSelectImg.alt = "rock"
//     yourCoiceDiv.appendChild(userSelectImg)
//     // innerHTML
//     // yourCoiceDiv.innerHTML = `<img src="./img/rock.png"/>`
// })
// paperImg.addEventListener('click', () =>{
//     userSelectImg.src = "./img/paper.png"
//     userSelectImg.alt = "paper"
//     yourCoiceDiv.appendChild(userSelectImg)
// })
// scissorImg.addEventListener('click', () =>{
//     userSelectImg.src = "./img/scissor.png"
//     userSelectImg.alt = "scissor"
//     yourCoiceDiv.appendChild(userSelectImg)
// })
