"use strict";

/*
Задание 2
Вы управляете рестораном, в котором работают разные повара,
специализирующиеся на определенных блюдах.
Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:
• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров,
а также для хранения заказов каждого клиента.
В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

// Создаем коллекцию Map для хранения блюд и их поваров:
const dishesAndChefs = new Map([
  ['Пицца "Маргарита"', "Виктор"],
  ['Пицца "Пепперони"', "Виктор"],
  ['Суши "Филадельфия"', "Ольга"],
  ['Суши "Калифорния"', "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

// Создаем коллекцию Map для хранения заказов каждого клиента:
const orders = new Map();

// Функция для добавления заказа клиента:

function addOrder(client, dish) {
  // Проверяем есть ли блюдо в меню:
  if (!dishesAndChefs.has(dish)) {
    console.error(`${client}, нет такого блюда: ${dish}!`);
    return;
  }
  // Проверяем, есть ли клиент в коллекции заказов. Если нет,
  // то создаем пару ключ-значение,
  // где ключ — имя клиента, а значение — массив заказанных блюд:
  if (!orders.has(client)) {
    orders.set(client, []);
  }
  // Добавляем блюдо в заказ клиента:
  orders.get(client).push(dish);
}

// Заказы клиентов:
addOrder("Алексей", "sdfsd");
addOrder("Алексей", 'Пицца "Пепперони"');
addOrder("Алексей", "sdfsd");
addOrder("Алексей", "Чизкейк");
addOrder("Алексей", 'Пицца "Пепперони"');

addOrder("Мария", 'Суши "Калифорния"');
addOrder("Мария", 'Пицца "Маргарита"');

addOrder("Ирина", "Чизкейк");

// Вывод информации о заказах:
// Первый аргумент `dishes` — это значение (value) текущей пары ключ-значение,
// то есть массив заказанных блюд для конкретного клиента.
// Второй аргумент `client` — это ключ (key) текущей пары ключ-значение,
// то есть имя клиента
orders.forEach((dishes, client) => {
  console.log(`${client} заказал(а):`);
  // Создаем новую коллекцию, чтобы в нее поместить количество заказов для каждого блюда:
  const dishCount = new Map();
  dishes.forEach((dish) => {
    // Получаем текущее количество заказов для данного блюда:
    let currentCount = dishCount.get(dish);
    // Если блюда еще нет в коллекции, устанавливаем количество заказов равным 0:
    if (currentCount === undefined) {
      currentCount = 0;
    }
    currentCount++;
    // Обновляем коллекцию с новым значением количества заказов для данного блюда:
    dishCount.set(dish, currentCount);

    // Вариант в одну строчку:
    // dishCount.set(dish, (dishCount.get(dish) || 0) + 1);
  });
  dishCount.forEach((count, dish) => {
    console.log(`- ${dish}, количество: ${count} шт.`);
    console.log(`  (готовит: ${dishesAndChefs.get(dish)})`);
  });
  console.log("");
});
