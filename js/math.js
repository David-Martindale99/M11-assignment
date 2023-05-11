//STEP 1
function appOne() {
    let num = prompt('Please enter a number.')
    console.log(Math.abs(num))
    alert(`${Math.abs(num)}`)
}
appOne()
//STEP 2
function appTwo() {
    let num = prompt('Please anter a decimal')
    console.log(Math.ceil(num))
    alert(Math.ceil(num))   
}
appTwo()

//STEP 3
function appThree() {
    let num = prompt('Please eneter a decimal')
    console.log(Math.floor(num))
    alert(Math.floor(num))
}
appThree()

//STEP 4
function appFour() {
    let testBig = 0
    let testSm = Infinity
    let nums = prompt('Please enter 5 numbers like so: 3,7,...,x')
    let arrNums = nums.split(',')
    
    for (i = 0; i < arrNums.length; i++) {
        if (arrNums[i] > testBig) {
            let number = parseInt(arrNums[i])
            if (number > testBig) {
                testBig = number
            }
        }
    }
    
    for (i = 0; i < arrNums.length; i++) {
        if (arrNums[i] < testSm) {
            let number = parseInt(arrNums[i])
            if (number < testSm) {
                testSm = number
            }
        }
    }

    console.log(`bigNum = ${testBig}`)
    console.log(`smNum = ${testSm}`)
    alert(`Your biggest number was ${testBig} and your smallest was ${testSm}`)
}
appFour()

//STEP 5
function appFive() {
    let num = prompt('Please enter a number')
    let sqrRoot = Math.sqrt(num)
    alert(sqrRoot)
    console.log(`The Sq Root is: ${sqrRoot}`)
}
appFive()
