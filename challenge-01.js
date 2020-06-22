// Program to calculate BMI (Body Mass Index)

const name = 'Charles'
const weight = 84
const height = 1.88

// Do the math to obtain BMI 
function bmi (fWeight, fHeight) {
    return fWeight / (Math.sqrt(fHeight))
}

// Conditional to make sure someone is overweight
function checkOverweight (fName, fWeight, fHeight){
    
    if (bmi(fWeight, fHeight) >= 30) {
        return `${fName}, you are overweight!`
    } else {
        return `${fName}, you are not overweight`
    }
    
}

console.log(checkOverweight(name, weight, height))