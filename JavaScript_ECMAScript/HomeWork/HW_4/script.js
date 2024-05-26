"use strict";

// Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const url = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = await getData(url);

const divEl = document.querySelector("div.container");
fetchData.forEach((element) => {
  divEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
        <div class="card__left">
          <h2 class="user-name">${element.username}</h2>
          <h3 class="name">${element.name}</h3>
          <h4 class="phone">Телефон: ${element.phone}</h4>
          <p class="email">Мыло: ${element.email}</p>
          <p class="company">Компания: ${element.company.name}</p>
          <p class="address">Адрес: ${element.address.city}, ${element.address.street}, ${element.address.suite}</p>
          <p class="web-site">Сайт: <a href="" class="web-site__link">${element.website}</a>
          </p>
        </div>
        <div class="card__right">
          <svg
            class="remove"
            width="800px"
            height="800px"
            viewBox="0 0 25 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <title>cross</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-467.000000, -1039.000000)"
                fill="#000000"
              >
                <path
                  d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z"
                  id="cross"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    `
  );
});

divEl.addEventListener("click", (e) => {
  if (e.target.closest(".remove")) {
    const removeCard = e.target.closest(".card");
    removeCard.remove();
  }
});

// Задача 2:
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url2 = "https://dog.ceo/api/breeds/image/random";

const getDog = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

let count = 0;

async function renderDogs() {
  const data = await getDog(url2);
  divEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="dogs">
    <img src="${data.message}" width=350>
    </div>
    `
  );
  count++;
  if (count === 10) {
    clearInterval(interval);
  }
}

const interval = setInterval(renderDogs, 3000);
