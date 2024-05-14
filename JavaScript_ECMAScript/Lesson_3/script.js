"use strict";

// const product = {
//   name: "smartphone",
//   price: 500,
//   getDescription(discount) {
//     const finalPrice = this.price - discount;
//     return `Товар ${this.name} со скидкой будет стоить ${finalPrice}`;
//   },
// };

// function calcDiscount(procent) {
//   return (this.price * procent) / 100;
// }

// const productDisc = calcDiscount.call(product, 30);
// console.log(productDisc);

// const productDisc2 = calcDiscount.apply(product, [50]);
// console.log(productDisc2);

// const descriptionDisc = product.getDescription(productDisc);
// console.log(descriptionDisc);

// Задание 1
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// function getPrototypeChain(object) {
//   const parents = [];
//   while (object !== null) {
//     parents.push(object);
//     object = Object.getPrototypeOf(object);
//   }
//   return parents;
// }

// console.log(getPrototypeChain({a:1}));

// Задание 2
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} издает звук`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   fetch() {
//     console.log(
//       `Собака породы ${this.breed} по имени ${this.name} принесла мяч`
//     );
//   }
// }
// const animalDog = new Animal('Джесси');
// animalDog.speak();

// const dog = new Dog('Рекс', 'Терьер');
// dog.speak();
// dog.fetch();

// Задача 3
// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

// class User {
//   //Приватные поля пишутся через #
//   #name;
//   #age;
//   #email;

//   //Статичное поле
//   static #maxAge = 99;

//   constructor(name, age, email) {
//     this.#name = name;
//     this.#age = age;
//     this.#email = email;
//     if (age > User.#maxAge) {
//       throw new Error("Возраст слишком велик!");
//     }
//   }

//   setName(newName) {
//     this.#name = newName;
//   }
//   setAge(newAge) {
//     if (newAge > User.#maxAge) {// Пишем через User, так как #maxAge приватный
//       throw new Error("Возраст слишком велик!");
//     }
//     this.#age = newAge;
//   }
//   setEmail(newEmail) {
//     this.#email = newEmail;
//   }

//   getInfo() {
//     console.log(`Имя ${this.#name} возраст ${this.#age} почта ${this.#email}`);
//   }
// }

// const vasya = new User("Вася", 23, "123@com");
// vasya.getInfo();
// vasya.setAge(50);
// vasya.getInfo();
// // vasya.setAge(150);
// // vasya.getInfo();

// // const petr = new User("Петя", 123, "123@com");

// Задача 4
// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

// class Product {
//   #name;
//   #price;
//   #quantity;
//   static maxQuantity = 10;

//   constructor(name, price, quantity) {
//     this.#name = name;
//     this.#price = price;
//     if (quantity > Product.maxQuantity) {
//       throw new Error("Допустимое количество превышено!");
//     }
//     this.#quantity = quantity;
//   }
//   // Другой вариант создание геттеров через ключевое слово get
//   get name() {
//     return this.#name;
//   }

//   get price() {
//     return this.#price;
//   }
//   get quantity() {
//     return this.#quantity;
//   }

//   set newName(newName) {
//     this.#name = newName;
//   }
// }

// const phone = new Product("Iphone", 100, 9);
// console.log(phone.name); //Обращаемся как к свойству, а не метод и получаем "Iphone"
// phone.newName = "Samsung"; //Тоже обращаемся как к свойству, поэтому задаем новое значение через знак присвоения
// console.log(phone.name);
