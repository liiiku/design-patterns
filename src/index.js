// 车 父类
class Car {
  constructor(number, name) {
    this.number = number
    this.name = name
  }
}

// 快车 Kuaiche
class Kuaiche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 1
  }
}

// 专车 Zhuanche
class Zhuanche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 2
  }
}


// 行程
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，名称：${this.car.name}，车牌号：${this.car.name}`)
  }
  end() {
    console.log('行程结束，金额：' + this.car.price * 5)
  }
}

// 测试
let car = new Kuaiche(100, '大众汽车')
let trip = new Trip(car)
trip.start()
trip.end()