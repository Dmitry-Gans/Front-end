// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const parseResult = JSON.parse(catsData);
console.log(parseResult);

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const divEl = document.querySelector('div.container');

parseResult.forEach(e => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    divEl.appendChild(itemEl);

    const authorEl = document.createElement('h1');
    authorEl.classList.add('author');
    authorEl.innerHTML = "Автор: " + e.author;
    itemEl.appendChild(authorEl);

    const quoteEl = document.createElement('h2');
    quoteEl.classList.add('quote');
    quoteEl.innerHTML = "Цитата: " + e.quote;
    itemEl.appendChild(quoteEl);

    const seriesEl = document.createElement('p');
    seriesEl.classList.add('series');
    seriesEl.innerHTML = "Серия книг: " + e.series;
    itemEl.appendChild(seriesEl);

});