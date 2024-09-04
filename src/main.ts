//TS

////////////////////////////////////////////////////////////////////////////// Basic types

//************************String

let firstName: string = "Alex"
console.log(firstName)

firstName = "Max"
console.log(firstName)

// Error
firstName = 1
console.log(firstName)

//************************ Number

let age: number = 25
console.log(age)

age = 30
console.log(age)

// Error
age = "50"
console.log(age)

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



////////////////////////////////////////////////////////////////////////////// Object structure

const profile: {
    firstName: string,
    age: number,
    isAdult: boolean,
} = {
    firstName: 'Alex',
    age: 25,
    isAdult: true
}
console.log(profile)

profile.firstName = "Max"
profile.age = 30
profile.isAdult = true
console.log(profile)

// Errors
profile.firstName = undefined
profile.age = null
profile.isAdult = 25
console.log(profile)

