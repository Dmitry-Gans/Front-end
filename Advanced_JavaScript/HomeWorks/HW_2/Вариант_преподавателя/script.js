document.getElementById("submitReview").addEventListener("click", addReview);

const initialData = [
  // Ваш initialData массив
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function uid() {
  return Math.random().toString(36).slice(2);
}

// Функция для загрузки отзывов из массива initialData в контейнер:
function loadInitialReviews() {
  initialData.forEach((product) => {
    product.reviews.forEach((review) => {
      addReviewToContainer(review.text);
    });
  });
}

// Функция для добавления отзыва:
function addReview() {
  const reviewText = document.getElementById("reviewInput").value;
  try {
    if (reviewText.length < 50 || reviewText.length > 500) {
      throw new Error("Отзыв должен содержать от 50 до 500 символов");
    }
    addReviewToContainer(reviewText);
  } catch (error) {
    alert(error.message);
  }
}

// Функция для шаблона, для добавления отзыва в контейнер:
function addReviewToContainer(text) {
  const container = document.getElementById("reviewsContainer");
  const reviewElement = document.createElement("p");
  reviewElement.textContent = text;
  container.appendChild(reviewElement);
}

// Загрузка отзывов при загрузке страницы:
window.onload = loadInitialReviews;
