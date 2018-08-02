class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init', this.name)
  }
  fn1() {
    console.log('fn1')
  }
  fn2() {
    console.log('fn2')
  }
}

// 工厂
// class Creator {
//   create(name) {
//     return new Product(name)
//   }
// }

let OP = function(name) {
  return new Product(name)
}

// 测试
// let creator = new Creator()
// let p = creator.create('p1')
// p.init()
// p.fn1()
// p.fn2()

let op = OP('p1')
op.init()
op.fn1()
op.fn2()