//STEP 1
function calcOne() {
    let string = prompt('Please enter a string')
    let newString = string.split('').sort().toString()
    alert(newString)
    console.log(newString)
}
calcOne()

//STEP 2
function calcTwo() {
    let string = prompt('Please enter a string')
    let arrWords = string.split(' ')
    
    let arrCapitalWords = arrWords.map(word => {
        let firstLetter = word.charAt(0).toUpperCase()
        let restOfWord = word.slice(1)
        return firstLetter + restOfWord
    })

    let capitalizedString = arrCapitalWords.join(' ')
    alert(capitalizedString)
}
calcTwo()

//STEP 3
function vowelMatch(string) {
   
    let arrVowels = string.match(/[aeiou]/g)
    let numOfVowels = arrVowels.length
   
    console.log(`There are ${numOfVowels} in your string`)
}

let string = prompt('Please enter a string')
vowelMatch(string)

//STEP 4
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  
    return result
  }
  
  console.log(generateRandomId(8))
  

//STEP 5
function longestCountryName(countryList) {
    let longestName = ''

    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].length > longestName.length) {
            longestName = countryList[i]
        }
    }

    return longestName
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"])); // Output: "United States of America"
