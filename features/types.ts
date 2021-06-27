const today = new Date() // TS now interprets today as date
today.getDay() // TS will predict methods such as getDay
today.fakeMethod // TS throws error for invalid method

const person = {
    age: 20
}
person.age // TS predicts (autocompletes) this property
person.fakeProperty // TS throws error

class Color {

}
const red = new Color()