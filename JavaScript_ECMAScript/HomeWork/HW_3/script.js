"use strict";

// Задание 1: "Управление персоналом компании"

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
//   displayInfo() {
//     console.log(`Имя сотрудника: ${this.name}`);
//   }
// }

// class Manager extends Employee {
//   constructor(name, department) {
//     super(name);
//     this.department = department;
//   }
//   displayInfo() {
//     console.log(`Имя сотрудника: ${this.name}, должность: ${this.department}`);
//   }
// }

// const employee = new Employee("Джонн");
// employee.displayInfo();

// const manager = new Manager("Петя", "Менеджер");
// manager.displayInfo();

// Задание 2: "Управление списком заказов"

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Order extends Product {
//    products = [];

//   constructor() {
//     super();
//     this.orderNumber = Math.floor(Math.random() * 1000);
//   }

//   addProduct(product) {
//     this.products.push(product);
//   }

//   getTotalPrice() {
//     this.sum = 0;
//     this.products.forEach((element) => {
//       this.sum += parseInt(element.price);
//     });
//     console.log(`Заказ ${this.orderNumber}, цена: ${this.sum}`);
//   }
// }

// const order = new Order();
// const product1 = new Product("Milk", "100");
// const product2 = new Product("Bred", "200");
// const product3 = new Product("Tea", "300");
// order.addProduct(product1);
// order.addProduct(product2);
// order.addProduct(product3);
// console.log(order.products);
// order.getTotalPrice();

// Задание 3: Управление животными в зоопарке

class ZooAnimal {
  #name;
  #age;
  #gender;

  static MAX_AGE = 25;

  constructor(name, age, gender) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
    if (age > ZooAnimal.MAX_AGE) {
      throw new Error("Превышен максимальный возраст");
    }
  }

  changeName(newName) {
    this.#name = newName;
  }

  changeAge(newAge) {
    if (newAge > ZooAnimal.MAX_AGE) {
      throw new Error("Превышен максимальный возраст");
    }
    this.#age = newAge;
  }
}

const dog = new ZooAnimal('Перси', 5, 'm');
console.log(dog);
dog.changeName('Джерри');
dog.changeAge(7)
console.log(dog);
