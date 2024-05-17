// const myPromise = new Promise((resolve, reject) => {});
// myPromise
//   .then((value) => {})
//   .catch((error) => {
//     console.log("Ошибка");
//   });

// Ссылка на API ресурсы https://jsonplaceholder.typicode.com/

// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(`Ошибка ${error}`));

// const getData = (url) =>
//   new Promise((resolve, reject) => {
//     fetch(url).then((response) =>
//       response
//         .json()
//         .then((data) => resolve(data))
//         .catch((error) => reject(error))
//     );
//   });

// getData(url)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// Второй пример

// const getData2 = async (url) => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchData = await getData2(url);
// console.log(fetchData);

// API NASA https://api.nasa.gov/

const nasaUrl =
  "https://api.nasa.gov/planetary/apod?api_key=VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN&count=10";

const getData3 = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = await getData3(nasaUrl);
console.log(fetchData);

const divEl = document.querySelector("div.catalog");
fetchData.forEach((element) => {
  divEl.insertAdjacentHTML(
    "beforeend",
    `
    <figure>
        <img
          src="${element.url}"
          alt="Elephant at sunset"
        >
        <figcaption>${element.explanation}</figcaption>
    </figure>
    `
  );
});
