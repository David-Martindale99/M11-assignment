//STEP 1
// function calcOne() {
//     let string = prompt('Please enter a string')
//     let newString = string.split('').sort().toString()
//     alert(newString)
//     console.log(newString)
// }
// calcOne()

// //STEP 2
// function calcTwo() {
//     let string = prompt('Please enter a string')
//     let arrWords = string.split(' ')
    
//     let arrCapitalWords = arrWords.map(word => {
//         let firstLetter = word.charAt(0).toUpperCase()
//         let restOfWord = word.slice(1)
//         return firstLetter + restOfWord
//     })

//     let capitalizedString = arrCapitalWords.join(' ')
//     alert(capitalizedString)
// }
// calcTwo()

//STEP 3
function vowelMatch(string) {
    let arrVowels = string.match(/[aeiou]/g)
    let numOfVowels = arrVowels.length
    console.log(`There are ${numOfVowels} in your string`)

}

let string = prompt('Please enter a string')
vowelMatch(string)

//STEP 4

//STEP 5
