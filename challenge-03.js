// Goals:
// Strengthen concepts of object
// 
// Create a program which can store enterprise info 
// inside an object called enterprise


const entreprise = {
    name: "Rocketseat",
    color: "Purple",
    focus: "Development",
    address: {
        street: "Guilherme Gembala st",
        number: 260
    }
}

console.log(`The ${entreprise.name} enterprose is at ${entreprise.address.street}, ${entreprise.address.number}`)
