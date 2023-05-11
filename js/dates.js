// //STEP 1
// function getDaysInMonth(month, year) {
    
//     const date = new Date(year, month + 1, 0)
//     return date.getDate()
// }
  
// const month = 5
// const year = 2028
// const daysInMonth = getDaysInMonth(month, year)
// console.log(`Days in month ${month + 1} of ${year}: ${daysInMonth}`)

//STEP 2
// function getMonthName(date) {
//     const monthNames = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//     return monthNames[date.getMonth()]
// }

// const date = new Date()
// const monthName = getMonthName(date)
// console.log(`The month name of ${date.toDateString()} is ${monthName}.`)

//STEP 3
function isItTheWeekend() {
    let date = new Date()
    let day = date.getDay()
    if (day === 0 || day === 7) {
        console.log('It is the weeked!')
    } else {
        console.log('It is not the weekend :(')
    }
}
isItTheWeekend()

//STEP 4
function whatDayIsYesterday() {
    const arrYesterday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    let today = new Date()
    let yesterDate = today.getDay()
    yesterDate = yesterDate - 1
    let yesterday = arrYesterday[yesterDate]

    console.log(`Yesterday was: ${yesterday}`)

}
whatDayIsYesterday()

//STEP 5
function getFirstLetterOfToday() {
    let arrDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    let today = new Date()
    let dayIndex = today.getDay()
    let letter = arrDays[dayIndex]

    console.log(`The first letter of today is: ${letter}`)
}
getFirstLetterOfToday()