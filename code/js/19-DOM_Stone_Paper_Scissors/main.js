//* ------ Selectors ------- */

//? Secilen resimler
const yourChoiceDiv = document.querySelector("#your-choice")
const pcChoiceDiv = document.querySelector("#pc-choice")

const selectionArticle = document.querySelector(".selection")
const messagePar = document.querySelector(".message")

//? Score'lar
const scoreCardSection = document.querySelector(".score-card")
const yourScoreSpan = document.getElementById("your-score")
const pcScoreSpan = document.getElementById("pc-score")

//? Modal secicileri
const modalCardSection = document.querySelector(".modal-card")
const playAgainBtn = document.getElementById("play-again")
const finalMessagePar = document.getElementById("final-message")
const modalArticle = document.querySelector(".modal")

//? Top-score
const topScoreSpan = document.getElementById("top-score")

//* ------- Variables ------- */
let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")
let pcRandom = ""

//? Renkler
const RED = "#fb778b"
const YELLOW = "#ffc538"
const GREEN = "#5ab7ac"

//* ------- Event Listeners ------- */

//? selection article'ı ve icindekilerden herhangi birisine tiklanildiginda
selectionArticle.addEventListener("click", (e) => {
    // console.log(e.target.id)
    if (e.target.id) {
        userSelectImg.src = `./img/${e.target.id}.png`
        userSelectImg.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }
})

//? Play again butonuna basildiginda
playAgainBtn.addEventListener("click", () => {
    modalArticle.style.display = "none"
    window.location.reload()
})

//* ------- Functions ------- */

//? Kullanici secim yaptiktan sonra PC'nin rasgele bir hareket yapmasini sagla
const createPcSelection = () => {
    const pcArr = ["rock", "paper", "scissor"]
    pcRandom = pcArr[Math.floor(Math.random() * 3)]
    pcSelectImg.src = `./img/${pcRandom}.png`
    // pcSelectImg.alt = pcRandom
    pcRandom = "rock"
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

//? Secilen hareketlere gore kazanani belirle.
const calculateResult = () => {
    if (userSelectImg.alt === pcSelectImg.alt) {
        //? esitlik durumu
        draw()
    } else {
        if (userSelectImg.alt === "rock") {
            pcRandom === "paper" ? youLost() : youWin()
        } else if (userSelectImg.alt === "scissor") {
            pcRandom === "rock" ? youLost() : youWin()
        } else if (userSelectImg.alt === "paper") {
            pcRandom === "scissor" ? youLost() : youWin()
        }
    }
    //? Her score guncellemesinden sonra 10 puana ulasan var mi kontrol et.
    //? Eger varsa sonuc modal'ini ac
    if (yourScoreSpan.textContent == "10" || pcScoreSpan.textContent == "10") {
        openModal()
    }
}

const draw = () => {
    messagePar.textContent = "It's a draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}
const youLost = () => {
    messagePar.textContent = "You Lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    //? kullanici bilemedi pc'nin score'unu arttir.
    pcScoreSpan.textContent++
}

const youWin = () => {
    messagePar.textContent = "You Win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    //? kullanici bildi score'unu arttir.
    yourScoreSpan.textContent++
}

//? modal aç
const openModal = () => {
    modalCardSection.classList.add("show")
    /* -------------------------------------------------------------------------- */
    console.log(yourScoreSpan.textContent);
    console.log(pcScoreSpan.textContent);
    localStorage.setItem("pcScoreSpan", pcScoreSpan.textContent)
    topScoreSpan.innerText = `10 : ${pcScoreSpan.textContent}`
   /* -------------------------------------------------------------------------- */
    
    //? eger kullanici 10 puana usalti ise kullanici kazanmistir.
    if (yourScoreSpan.textContent == "10") {
        finalMessagePar.textContent = `💃 You Win🕺`
        modalArticle.style.backgroundColor = GREEN
        playAgainBtn.style.color = GREEN
    } else if (pcScoreSpan.textContent == "10") {
        //? eger pc 10 puana usalti ise pc kazanmistir.
        finalMessagePar.textContent = `☹️ You Lost ☹️`
        document.querySelector(".modal").style.backgroundColor = RED
        playAgainBtn.style.color = RED
    }
}

//? if (yourScoreSpan > pcScoreSpan) {
//?   ???? 
//? }
/* -------------------------------------------------------------------------- */
const best = localStorage.getItem("pcScoreSpan")
console.log(best);

topScoreSpan.innerHTML = `<span> 10 - ${best}</span>`
/* -------------------------------------------------------------------------- */

// topScoreSpan.textContent()

// localStorage.setItem("high-Score", 10)
// localStorage.getItem("")

//! local storage Veri yazma okuma 
//! let a = localStorage.getItem("high-Score")
//! console.log(a)

// localStorage.setItem("high-Score", 10)






//? Ilkel yontem
// const rockImg = document.getElementById("rock")
// const scissorImg = document.getElementById("scissor")
// const paperImg = document.getElementById("paper")

// rockImg.addEventListener("click", () => {
//   image.src = "./img/rock.png"
//   image.alt = "rock"
//   yourChoice.appendChild(image)
// })

// paperImg.addEventListener("click", () => {
//   image.src = "./img/paper.png"
//   image.alt = "paper"
//   yourChoice.appendChild(image)
// })

// scissorImg.addEventListener("click", () => {
//   image.src = "./img/scissor.png"
//   image.alt = "scissor"
//   yourChoice.appendChild(image)
// })