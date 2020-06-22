// Goal:
// Strengthen concepts of array, repetition and scope(?)

// - Develop a program to store user info such as name, age 
// and the technologies which he works with
// - The list of users must be shown on screen


const users = [
    { name: "Carlos", tehcnologies: ["HTML", "CSS"] },
    { name: "Jasmine", tehcnologies: ["JavaScript", "CSS"] },
    { name: "Tuane", tehcnologies: ["HTML", "Node.js", "React"] }
];

function listUsers(fUsers){
    for (let i = 0; i < fUsers.length; i++) {
                
        console.log(`${fUsers[i].name} works with:`)
        
        for (let x = 0; x < fUsers[i].tehcnologies.length; x++) {
            console.log(`   - ${fUsers[i].tehcnologies[x]}`)
        }
    }
}

listUsers(users);