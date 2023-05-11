//STEP 1
function appOne() {
    let name = prompt('Please enter your name')
    trimName = name.trim()
    cleanedName = trimName.replace(/\s+/g, '')
    nameLength = cleanedName.length
    alert(`Your name is ${nameLength} characters long.`)
}
appOne()

//STEP 2
function appTwo() {
    let name = prompt('Please enter your name.')
    if (name !== '') {
        let indexRange = name.length - 1
        let chosenNum = prompt(`Please choose a number between 0 and ${indexRange}.`)
        if (chosenNum >= 0 && chosenNum <= indexRange) {
            alert(`You selected the letter ${name.charAt(chosenNum)}`)
        } else {
            alert('Invalid entry, please learn to read.')
        }
    } else {
        alert('Invalid entry, please learn to read.')
    }
}
appTwo()

//STEP 3
function appThree() {
    let firstName = prompt('Please enter your first name.')
    let lastName = prompt('Please enter your last name')
    let fullName = firstName.concat(' ', lastName)
    alert(`Your name is: ${fullName}`)
}
appThree()

//STEP 4
function appFour() {
    let message = 'The quick brown fox jumps over the lazy dog'
    let arrMessage = message.split(' ')
    let foxIndex = arrMessage.indexOf('fox')
    alert(`The foxIndex is: ${foxIndex}`)
}
appFour()

//STEP 5
function appFive() {
    let message = 'The quick brown fox jumped over the lazy fox'
    let arrMessage = message.split(' ')
    let lastFoxIndex = arrMessage.lastIndexOf('fox')
    alert(`The lastFoxIndex is ${lastFoxIndex}`)
}
appFive()

//STEP 6
function appSix() {
    let message = 'The quick brown fox jumps over the lazy dog'
    let name = prompt('Please enter your full name.')
    let updatedMessage = message.replace('the lazy dog', name)
    alert(`${updatedMessage}`)
}
appSix()

//STEP 7
function appSeven() {
    let message = 'The quick brown fox jumps over the lazy dog'
    let chosenWord = prompt('Enter a word')
    let pattern = new RegExp(chosenWord)
    let result = pattern.exec(message).toString()
    alert(`The result of your input is: ${result}`)
    console.log(result)
}
appSeven()

//STEP 8
function appEight() {
    let old_string = 'The quick brown fox jumps over the lazy dog.'
    let new_string = old_string.slice(31, 43)
    alert(`The new string is ${new_string}`)
}
appEight()
//STEP 9
function appNine() {
    let message = '     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG         '
    let newMessage = message.trim().toLowerCase()
    alert(`${newMessage}`)
}
appNine()

//STEP 10
function appTen() {
    let message = 'the quick brown fox jumps over the lazy dog'
    let newMessage = message.replace('the', 'The')
    alert(`${newMessage}`)
}
appTen()
