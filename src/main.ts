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


////////////////////////////////////////////////////////////////////////////// Arrays & Tuples
//Arrays
const nums: number[] = [1, 2, 3, 4, 5]
console.log(nums)
const nums2: Array<number> = [1, 2, 3, 4, 5]
console.log(nums2)

//Tuples
const numbers: [number, number] = [1, 2]
console.log(numbers)

numbers[0] = 21
numbers[1] = 12
console.log(numbers)

// Errors
numbers[0] = 'one'
numbers[1] = 'two'
console.log(numbers)



const diff: [number, string, boolean] = [1, '2', false]
console.log(diff)

diff[0] = 21
diff[1] = "12"
diff[2] = true
console.log(diff)

// Errors
diff[0] = 'one'
diff[1] = 2
diff[2] = 'true'
console.log(diff)


////////////////////////////////////////////////////////////////////////////// Functions

function getAge(name?: string): number {
    console.log(`${name} is 25 years old.`)
    return 25
}
console.log(getAge('Max'))

const getAgeArrow = (name?: string): string => `${name} is 21years old.`
console.log(getAgeArrow("Ann"))

// REST

function getFullName(firstName: string, ...names: string[]) {
    return `${firstName} ${names.join(' ')}`
}
console.log(getFullName("Alex", 'Sandy', 'Wopper'))


////////////////////////////////////////////////////////////////////////////// functional overloads
function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(adult: boolean): boolean;
function getInfo(value: any): any {
    return value
}
const res = getInfo('hello')
console.log(res)
console.log(typeof res)

const res2 = getInfo(25)
console.log(res2)
console.log(typeof res2)

const res3 = getInfo(false)
console.log(res3)
console.log(typeof res3)
