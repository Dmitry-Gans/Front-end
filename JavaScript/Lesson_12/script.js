// 1. Создание медиа плеера
// 2. Создать файл index.html
// 3. Создать папку img в которую загрузить изображение
// кнопок play, pause
// 4. Скачать произвольное видео из интернета
// 5. Добавить Тег видео в html
// 6. Продумать внешний вид progress и volume
// 7. Продумать время проигрывателя
// 8. Реализовать функционал своего собственного видеоплеера
// 9. Скачать все картинки (найти макет по желанию)
// 10. Добавляете html добавляете все элементы для
// управления видео
// 11. Реализуем кнопки play, pause
// 12. время и ползунки
// 13. Собираем внешний вид

const videoEl = document.createElement("video");
videoEl.setAttribute("src", "media/rabbit320.mp4");
const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(videoEl);

const controlEl = document.createElement("div");
controlEl.classList.add("containerController");
const playEl = document.createElement("div");
playEl.classList.add("play");
const pauseEl = document.createElement("div");
pauseEl.classList.add("pause");

const rangeEl = document.createElement("input");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("value", "0");

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

containerEl.appendChild(controlEl);
controlEl.appendChild(rangeEl);
controlEl.appendChild(volumeEl);
controlEl.appendChild(playEl);
controlEl.appendChild(pauseEl);

playEl.addEventListener("click", (e) => {
  videoEl.play();
  //Длинна видео и текущее время
  console.log(videoEl.duration, videoEl.currentTime);
});

pauseEl.addEventListener("click", (e) => {
  videoEl.pause();
  console.log(videoEl.duration, videoEl.currentTime);
});

//Событие позволяющее перематывать видео
rangeEl.addEventListener("change", (e) => {
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

//Событие которое показывает шкалу времени
videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((videoEl.currentTime / videoEl.duration) * 100)
  );
});

// Метод позволяет задать громкость по умолчанию
videoEl.addEventListener("loadeddata", (e) => {
  volumeEl.setAttribute("value", videoEl.volume * 50);
});

//Метод позволяет менять громкость
volumeEl.addEventListener("change", (e) => {
  videoEl.volume = e.target.value / 100;
});
