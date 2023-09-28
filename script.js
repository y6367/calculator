const numbers = document.querySelectorAll(".num")
const display = document.querySelector(".display")
const opperators = document.querySelectorAll(".opp")
const clear = document.querySelector(".clear")
const enter = document.querySelector(".enter")

let first = undefined;
let op = undefined;
let second = undefined;
let answer = undefined;

numbers.forEach((button) => {
    button.addEventListener(("click"), ()  => {
        if (first === undefined) {
            first = button.innerHTML;
            display.innerHTML = first;
            console.log(first)
            return
        } else if (op === undefined) {
            first = first + button.innerHTML;
            display.innerHTML = first;
            console.log(first)
        } else if (op !== undefined && second === undefined) {
            second = button.innerHTML;
            display.innerHTML = second;
            console.log(second)
            return
        } else {
            second = second + button.innerHTML;
            display.innerHTML = second;
            console.log(second)
        }
        
    });
});

opperators.forEach((button) => {
    button.addEventListener(("click"), () => {
        op = button.innerHTML
        display.innerHTML = op;
        console.log(op)
    })
})

enter.addEventListener(("click"), () => {
    if(op === "+") {
        answer = Number(first) + Number(second);
        resetCalc()
    } else if (op === "-") {
        answer = Number(first) - Number(second);
        resetCalc()
    } else if (op === "x") {
        answer = Number(first) * Number(second);
        resetCalc()
    } else if (op === "/") {
        answer = Number(first) / Number(second);
        resetCalc()
    }
})

clear.addEventListener(("click"), () => {
    first = undefined;
    op = undefined;
    second = undefined;
    answer = undefined;
    display.innerHTML = ""
})

function resetCalc() {
    first = undefined;
    op = undefined;
    second = undefined;
    first = answer
    display.innerHTML = answer;
    answer = undefined;
}