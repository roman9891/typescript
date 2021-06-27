let apples: number = 5 // annotation that tells TS apples should always be a number
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

// Built-in Objects
let newDate: Date = new Date()

// Arrays
let colors: string[] = ['red', 'green', 'blue'] // annotation indicates colors will be an array of only strings
let numbers: number[] = [1,2,3,4,5]

// Classes
class Car {

}
let car: Car = new Car()

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i) => {
    console.log(i)
}

const funkyFunctions: (str: string, num: number) => number[] = (str, num) => {
    return [1,2,3,4]
}