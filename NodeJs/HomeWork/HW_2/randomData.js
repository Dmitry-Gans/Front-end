"use strict";

const randomData = {
  firstName: [
    "Дима",
    "Женя",
    "Саша",
    "Света",
    "Петя",
    "Серега",
    "Леха",
    "Вася",
    "Лера",
    "Варя",
  ],
  secondName: ["Иванов", "Петров", "Стрельцов", "Жуков", "Семенов"],
  date: ["21.01.1994", "01.03.1993", "30.11.1990", "11.8.2004", "25.12.1994"],
  getRandomName: () => {
    const indexFirst = Math.floor(Math.random() * randomData.firstName.length);
    const indexSecond = Math.floor(
      Math.random() * randomData.secondName.length
    );
    const nameFirst = randomData.firstName[indexFirst];
    const nameSecond = randomData.secondName[indexSecond];
    return `${nameFirst} ${nameSecond}`;
  },
  getRandomDate: () => {
    const index = Math.floor(Math.random() * randomData.date.length);
    const date = randomData.date[index];
    return date;
  },
};

module.exports = { randomData };
