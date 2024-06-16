"use strict";

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const listOfChefs = new Map();
const listOfOrders = new Map();

const mealVictor = {
  chef: "Виктор",
  meals: new Set(["Пепперони", "Маргарита"]),
};
const mealOlga = {
  chef: "Ольга",
  meals: new Set(["Калифорния", "Анигири"]),
};
const mealDmitry = {
  chef: "Дмитрий",
  meals: new Set(["Тирамису", "Чизкейк"]),
};

listOfChefs.set("Пицца", mealVictor);
listOfChefs.set("Суши", mealOlga);
listOfChefs.set("Десерты", mealDmitry);

class Order {
  constructor(client, type, meal) {
    this.client = client;
    this.type = type;
    this.meal = meal;
  }
  confirmOrder() {
    if (listOfOrders.has(this.client)) {
      if (
        listOfChefs.has(this.type) &&
        listOfChefs.get(this.type).meals.has(this.meal)
      ) {
        listOfOrders.get(this.client).add(this.meal);
      } else {
        return "Нет такого блюда";
      }
    } else {
      listOfOrders.set(this.client, new Set([this.meal]));
    }
    const nameChef = listOfChefs.get(this.type).chef;
    const meals = [...listOfOrders.get(this.client)].join(", ");
    return `Клиент ${this.client} заказал: ${meals}, его готовит ${nameChef}`;
  }
}

const order = new Order("Саша", "Пицца", "Пепперони");
const order2 = new Order("Саша", "Десерты", "Чизкейк");
const order3 = new Order("Саша", "Суши", "выаыв");
const order4 = new Order("Петя", "Суши", "Калифорния");

console.log(order.confirmOrder());
console.log(order2.confirmOrder());
console.log(order3.confirmOrder());
console.log(order4.confirmOrder());

console.log(listOfOrders);
