

const dieRolls = []

let rollButton = document.querySelector('#roll-button')
let userInput = document.querySelector('#dice-input')
let showRolls = document.querySelector('#show-all-rolls')
let counter = document.querySelector('#total-counter')
let rollList = document.querySelector('#roll-list')
let resetButton = document.querySelector('#reset-button')
let position = 0
let sum = 0

rollButton.addEventListener('click', function () {
 let rollNumber = userInput.value
    // console.log(rollNumber)

    while(position < rollNumber) {

    const diceNumber = Math.floor(Math.random() * 6) + 1
    // console.log(diceNumber)
    
    dieRolls.push(diceNumber)
    // console.log(dieRolls)

    let add = (a, b) =>
    a + b
    let sum = dieRolls.reduce(add)
    console.log(sum)

    document.getElementById("total-counter").innerHTML = sum

    position += 1
    }

    // console.log(sum)
    console.log(dieRolls)


})

showRolls.addEventListener('click', function() {

    for (let index = 0; index < dieRolls.length; index ++) {
    const newDieString = '<li id = "roll-list">' + dieRolls[index] + '</li>';

    document.getElementById('roll-list').innerHTML += newDieString;
    
    // rollList.innerHTML += '<li id "roll-list">' dieRoll[index] </li>

    }
})




