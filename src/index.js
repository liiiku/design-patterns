class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old.`)
  }
}

class Student extends Person {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    console.log(`${this.name} is studying.`)
  }
}

let xiaoming = new Student('xiaoming', 24, 'A1')
xiaoming.study()
xiaoming.speak()
console.log(xiaoming.number)