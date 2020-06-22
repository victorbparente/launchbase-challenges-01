// This program will make sure if someone is elegible 
// to paid retirement
const name = "John Smith"
const gender = 'Male'
const age = 100
const contribution = 4

// Men must have 35+ years of contribution
// Women must have contributed for at least 30 years
// The 85-95 rule means that age + contribution years must be
// at least 85 to women and 95 to men

const retirementRule = age + contribution
// console.log(retirementRule)

function paidRetirment(fName, fGender, fContribution, fRetirmenteRule) {

    if ((fGender === 'Male' || fGender === 'Female') && fRetirmenteRule >= 85 && fContribution >= 30) {
        if (fGender === 'Male' && fRetirmenteRule < 95 && fContribution < 35) {
            return `${fName} is ${fGender} and is not elegible to paid retirement`
        } else {
            return `${fName} is ${fGender} and is elegible to paid retirement`
        }
    } else {
        return `${fName} is ${fGender}, is and is not elegible to paid retirement`
    }
}

console.log(paidRetirment(name, gender, retirementRule))