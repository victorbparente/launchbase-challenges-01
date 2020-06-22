// Strengthen concepts of array, repetition and scope(?)

// - Develop a program to store user info such as name, age 
// and the technologies which he works with
// - The list of users must be shown on screen


const users = [
    { name: "Doctor", tehcnologies: ["HTML", "CSS"] },
    { name: "John", tehcnologies: ["JavaScript", "CSS"] },
    { name: "Smith", tehcnologies: ["HTML", "Node.js", "React"] }
];

function listUsers(fUsers){
    // Goes trhough each of the users in the array
    for (let i = 0; i < fUsers.length; i++) {
        // Goes through each technology for each user in the array
        for (let x = 0; x < fUsers[i].tehcnologies.length; x++) {
            
            if (fUsers[i].tehcnologies[x] === "CSS") {
                console.log(`The user ${fUsers[i].name} works with CSS`)
            }

        }
    }
}

listUsers(users);