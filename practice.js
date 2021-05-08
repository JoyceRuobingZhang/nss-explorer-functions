/*Write a function that takes a string of a dog breed as an argument (like 'border collie')
Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
Log the string of "When it comes to pets," plus the returned value of the function.
If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".*/

const favoriteDog = (breed) => {
    if (breed === "meow") {
        return "I like cats"
    } else {
        return `My favorite dog breed is ${breed}`
    }
}

const myFavoriteDog = favoriteDog("meow")

console.log(`When it comes to pets, ${myFavoriteDog}`)



// Scope in JavaScript
// 1.
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// 2.
const conjunction = function(firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")

// 3.
const modSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})

console.log(HTMLRepresentation)


//4.
const locations = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [3, 3]
]

for (const location of locations) {

    if (location[0] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    }

}


//5.
const llamaNamer = function() {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    const suffix = " the Llama"
    const name = possibleNames[randomizer]
    return `${name} ${suffix}`
}

console.log(llamaNamer())