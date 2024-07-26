import { INCREMENT, DECREMENT } from './actions'; // Импортируем типы действий

// Начальное состояние счетчика
const initialState = {
	count: 0, // Начальное значение счетчика
};

// Редьюсер для обработки действий
const counterReducer = (state = initialState, action) => {
  // state - текущее состояние редьюсера (начальное значение по умолчанию).
  // action - объект с информацией о действии, которое нужно обработать.
	switch (
		action.type // Проверяем тип действия
	) {
		case INCREMENT: // Если действие - увеличение
			return { ...state, count: state.count + 1 }; // Увеличиваем счетчик на 1
		case DECREMENT: // Если действие - уменьшение
			return { ...state, count: state.count - 1 }; // Уменьшаем счетчик на 1
		default:
			return state; // Возвращаем текущее состояние, если действие не распознано
	}
};

export default counterReducer;
