// Goal:
// Strengthen concepts of array

// - Develop a program to store developer info such as name, age and technologies which works with
// - As a developer can work with different technologies, they should be stored in a array
// - The technologies must be objects with name and expertise

const developer = {
    name: "John Smith",
    age: "800",
    technologies: [
        {
            name: "C++",
            expertise: "Desktop"
        },
        {
            name: "Python",
            expertise: "Data Science"
        },
        {
            name: "Javascript",
            expertise: "Web/Mobile"
        }
    ]
}

// Show on screen the user name, age and first technology he uses
console.log(`The developer ${developer.name} is ${developer.age} years old and uses ${developer.technologies[0].name} technology with ${developer.technologies[0].expertise} expertise.`)