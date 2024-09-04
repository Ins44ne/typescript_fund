//TS

////////////////////////////////////////////////////////////////////////////// Basic types

//************************String

let firstNameTs: string = "Alex"
console.log(firstNameTs)

firstNameTs = "Max"
console.log(firstNameTs)

// Error
firstNameTs = 1
console.log(firstNameTs)

//************************ Number

let ageTs: number = 25
console.log(ageTs)

ageTs = 30
console.log(ageTs)

// Error
ageTs = "50"
console.log(ageTs)

//************************ Boolean

let isAdult: boolean = true
console.log(isAdult)

isAdult = false
console.log(isAdult)

// Errors
isAdult = 30
console.log(isAdult)
isAdult = "50"
console.log(isAdult)

//************************ Undefined

let gender: undefined = undefined
console.log(gender)

// Error
gender = false
console.log(gender)

//************************ Null

let moneyCount: null = null
console.log(moneyCount)

// Error
moneyCount = 500
console.log(moneyCount)

//************************ Any

let nickName: any = "Any"
console.log(nickName)

// No Errors
nickName = 500
console.log(nickName)
nickName = true
console.log(nickName)
nickName = "AngryBird"
console.log(nickName)



