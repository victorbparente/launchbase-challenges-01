// Strengthen concepts of array, repetition and scope(?)

// - Develop a program that calculates the sum of income and outcome
// and return it's balance

const users = [
    {
        name: "Doctor",
        income: [115.3, 48.7, 98.3, 14.5],
        outcome: [85.3, 13.5, 19.9]
    },
    {
        name: "John",
        income: [24.6, 124.3, 45.3],
        outcome: [185.3, 12.1, 120.0]
    },
    {
        name: "Smith",
        income: [9.8, 120.3, 340.2, 45.3],
        outcome: [450.20, 29.9]
    }
]

let balance = 0
users.forEach(balanceCalc)

function balanceCalc(fUsers) {
    let balance = 0

    balance = sumNumbers(fUsers.income) - sumNumbers(fUsers.outcome)

    if (balance > 0) {
        console.log(`${fUsers.name} has a POSITIVE balance of ${balance}`)
    } else {
        console.log(`${fUsers.name} has a NEGATIVE balance of ${balance}`)
    }
}

function sumNumbers (fNumbers){
    let sum = 0
    for (let fNumber of fNumbers) {
        sum += fNumber
    }
    return sum
}