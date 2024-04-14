// Задание 3 (тайминг 30 минут)
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// const parseResult = JSON.parse(dataInfo);

// const divContEl = document.querySelector("div.container");

// parseResult.forEach((element) => {
//   const newDivEl = document.createElement("div");
//   newDivEl.classList.add(element.class);

//   const imgEl = document.createElement("img");
//   imgEl.setAttribute("src", element.url);
//   imgEl.setAttribute("width", element.width);
//   imgEl.setAttribute("height", element.height);

//   Задание 4 (тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения (из
// данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости

//   const textEl = document.createElement("p");
//   textEl.innerHTML = element.text;

//   newDivEl.appendChild(imgEl);
//   newDivEl.appendChild(textEl);
//   divContEl.appendChild(newDivEl);
// });

// Дополнительный вариант с запросом с сервера:

const divContEl = document.querySelector('div.container');

fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
    .then((response) => response.json())
    .then((parseResult) => {
        parseResult.forEach(element => {
            // console.log(element);
            const newDivEl = document.createElement('div');
            newDivEl.classList.add('img__container');
            divContEl.appendChild(newDivEl);

            const textData = document.createElement('p');
            textData.innerHTML = element.Date;
            newDivEl.appendChild(textData);

            const textCurAbb = document.createElement('p');
            textCurAbb.innerHTML = element.Cur_Abbreviation;
            newDivEl.appendChild(textCurAbb);

            const textCurScale = document.createElement('p');
            textCurScale.innerHTML = element.Cur_Scale;
            newDivEl.appendChild(textCurScale);

            const textCurName = document.createElement('p');
            textCurName.innerHTML = element.Cur_Name;
            newDivEl.appendChild(textCurName);

            const textOffRate = document.createElement('p');
            textOffRate.innerHTML = element.Cur_OfficialRate;
            newDivEl.appendChild(textOffRate);
        });
    });
