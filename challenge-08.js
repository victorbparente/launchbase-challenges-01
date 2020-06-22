// Develop a program to do bank operations on a user account
const user = {
    name: "Doctor",
    transactions: [],
    balance: 0
}

function createTransaction(user, transaction) {
    user.transactions.push(transaction)
    calcBalance(user, transaction)
}

function calcBalance(user, transaction) {
    if (transaction.type === "credit")
        user.balance += transaction.value

    if (transaction.type === "debit")
        user.balance -= transaction.value
}

function creatRandomTransaction() {
    let transaction = {
        type: "",
        value: 0
    }

    transaction.type = Math.random().toFixed(1) > 0.5 ? "debit" : "credit"
    transaction.value = Math.random().toFixed(2) * 150

    return transaction
}

function getHigherTransacrionByType(transactionType) {
    let higherTransaction = 0

    if (checkTransactionType(transactionType)) return 0

    for (let transaction of user.transactions) {
        if (transaction.type == transactionType && transaction.value > higherTransaction)
            higherTransaction = transaction.value

    }

    return higherTransaction
}

function checkTransactionType(transactionType) {
    if (transactionType !== "debit" && transactionType !== "credit")
        return false
}

function getAverageTransactionValue() {
    let sum = 0
    let average = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    average = sum / user.transactions.length

    return average
}

function getTransactionsCount() {
    let debitCount = 0
    let creditCount = 0

    for (const transaction of user.transactions) {
        if (transaction.type == "credit")
            creditCount++
        if (transaction.type == "debit")
            debitCount++
    }

    return transactionCounter = { credit: creditCount, debit: debitCount }
}


// for (let i = 0; i < 5; i++) {
//     const transaction = creatRandomTransaction()
//     createTransaction(user, transaction)
// }

createTransaction(user, { type: "credit", value: 50 })
createTransaction(user, { type: "credit", value: 120 })
createTransaction(user, { type: "debit", value: 80 })
createTransaction(user, { type: "debit", value: 30 })

console.log(user)

let higherTransaction = getHigherTransacrionByType("credit")
console.log(`The higher credit transaction was ${higherTransaction}`)

higherTransaction = getHigherTransacrionByType("debit")
console.log(`The higher debit transaction was ${higherTransaction}`)

const averageTransaction = getAverageTransactionValue()
console.log(`The average transaction value was ${averageTransaction}`)

const transactionsCount = getTransactionsCount()
console.log(`There were a total of ${transactionsCount.credit} credit transactions and ${transactionsCount.debit} debit transactions.`)