// Задача 2.

// Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием
// Unsplash API, выполните следующие шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.

// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите на кнопку "Your apps".
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).

// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
// Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.

// 5. Реализуйте загрузку фотографий при открытии страницы.

// 6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.

// Application ID
// 627819

// Access Key
// teI77ybP41b2nJcQY-mOmE8nEH0sFeXnWJQTxdgpZcA

let counter = 2;
let isFetching = false;
// Secret key
// wKUQV2wZFilKkHnRh-7vDuLq_TbXQS6WcUho80C5rZw
document.addEventListener("DOMContentLoaded", Main);
document.addEventListener("scroll", async function () {
  // Получаем высоту элемента,
  // на котором произошло событие
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.clientHeight); //высота страницы на текущий момент
  //   console.log(document.documentElement.scrollHeight);//хз

  //   console.log(`текущая прокрутка ${document.documentElement.scrollTop}`);
  //   console.log(`точка прокрутки ${document.documentElement.clientHeight - 100}`);

  const page = document.documentElement;

  if (
    page.scrollTop + page.clientHeight >= page.scrollHeight - 100 &&
    !isFetching
  ) {
    counter++;
    const data = await fetchPhotoList(counter);
    let imgsHTML = "";
    data.forEach((element) => {
      imgsHTML += createImg(element);
    });
    photoContainerEl.insertAdjacentHTML("beforeend", imgsHTML);
  }
});

const photoContainerEl = document.querySelector("#photos-container");

async function fetchPhotoList(page) {
  try {
    isFetching = true;
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}`,
      {
        headers: {
          Authorization:
            "Client-ID teI77ybP41b2nJcQY-mOmE8nEH0sFeXnWJQTxdgpZcA",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`ошибка ,сервер статус ${response.status}`);
    }

    return await response.json();
  } finally {
    isFetching = false;
  }
}

async function Main() {
  const data = await fetchPhotoList(counter);
  let imgsHTML = "";
  data.forEach((element) => {
    imgsHTML += createImg(element);
  });
  photoContainerEl.innerHTML = imgsHTML;
}

function createImg(objInfo) {
  return `<div class="photo">
        <img src="${objInfo.urls.regular}" alt="" />
      </div>`;
}
