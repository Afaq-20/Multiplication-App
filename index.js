const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const headEl = document.getElementById("heading")

const formEl = document.getElementById("form")

const inputEl = document.getElementById("input")

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}

scoreEl.innerText = `score:${score}`;

headEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

const x = (e) => {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    }
    else {
        score--
        updateLocalStorage()
    }
}
formEl.addEventListener("submit", x) 


// formEl.addEventListener("submit", () => {
//     const userAns = +inputEl.value
//     if (userAns === correctAns) {
//         score++;
//         updateLocalStorage()
//     }
//     else {
//         score--;
//         updateLocalStorage()
//     }
// });

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}