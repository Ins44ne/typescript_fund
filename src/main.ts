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

////////////////////////////////////////////////////////////////////////////// Classes

class Animal {
    private name: string

    constructor(name: string) { this.name = name }

    getName() {
        return this.name
    }
}

const cat = new Animal('cat')
console.log(cat.getName())

////////////////////////////////////////////////////////////////////////////// Interfaces

interface Iprofile extends Iwork {
    firstName: string
    age: number
    isAdult: boolean
}

interface Iwork {
    place: string
}

const pr: Iprofile = {
    firstName: 'Jax',
    age: 35,
    isAdult: true,
    place: 'Wall str.'
}
console.log(pr)

////////////////////////////////////////////////////////////////////////////// Types

type Tname = string
type TnumBool = number | boolean

type Tprofile = {
    firstName: Tname
    age: TnumBool
    isAdult: TnumBool
} & Twork

type Twork = {
    place: Tname
}

const prT: Tprofile = {
    firstName: 'Jax',
    age: 35,
    isAdult: true,
    place: 'Wall str.'
}
console.log(prT)

////////////////////////////////////////////////////////////////////////////// Enums

enum Colors {
    red,
    green,
    blue,
    white,
    black
}

const primary: Colors = Colors.black
const secondary: Colors = Colors.white
console.log(`${primary} ${typeof primary}`)
console.log(`${secondary} ${typeof secondary}`)

////////////////////////////////////////////////////////////////////////////// Assertions

const someValue: any = "qwerty123"
const strLength: number = (someValue as string).length
console.log(strLength)

////////////////////////////////////////////////////////////////////////////// Generic

function getCar<T>(name: T): T {
    return name
}
console.log(getCar("Tesla"))
console.log(getCar("Tesla" as string))

// Error

function getCarErr<T extends string>(name: T): T {
    return name
}
console.log(getCarErr(true))

////////////////////////////////////////////////////////////////////////////// Utility types

interface Iprof {
    firstName: string
    age: number
    isAdult: boolean
}

// Pick

const prof: Pick<Iprof, 'isAdult'> = {
    isAdult: true
}
console.log(prof)

// Omit

const prof2: Omit<Iprof, 'isAdult'> = {
    firstName: 'Faith',
    age: 17
}
console.log(prof2)

// Partial

const prof3: Partial<Iprof> = {
    firstName: 'Axel'
}
console.log(prof3)

// Required

const prof4: Required<Iprof> = {
    firstName: 'Axel',
    age: 16,
    isAdult: false

}
console.log(prof4)

// ReadOnly

const prof5: Readonly<Pick<Iprof, "firstName">> = {
    firstName: 'Axel',
}
console.log(prof5)

// Error
prof5.firstName = "Alex"
console.log(prof5)

// Record

const store: Record<string, number> = {
    "apple": 500,
    'pear': 100,
    'peach': 50
}
console.log(store)
