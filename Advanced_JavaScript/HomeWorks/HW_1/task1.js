"use strict";

// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
  {
    title: "Music 1",
    artist: "Киркоров",
    year: "2021",
  },
  {
    title: "Music 2",
    artist: "Баста",
    year: "2022",
  },
  {
    title: "Music 3",
    artist: "Кто то",
    year: "2018",
  },
];

const playList = {
  musicCollection,
  *[Symbol.iterator]() {
    for (const music of this.musicCollection) {
      yield music;
    }
  },
};

const iterator = playList[Symbol.iterator]();

// console.log(iterator.next());

for (const music of playList) {
  console.log(`Название альбома: ${music.title}
Исполнитель: ${music.artist}
Год выпуска: ${music.year}`);
}
