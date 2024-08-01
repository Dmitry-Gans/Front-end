import { useEffect, useState } from 'react'; // Импорт используемых хуков из React
import './Converter.css'; // Импорт CSS для стилизации компонента
import axios from 'axios'; // Импорт Axios для выполнения HTTP-запросов

function Converter() {
	// Создание состояния для различных данных
	const [amount, setAmount] = useState(''); // Состояние для хранения введенной суммы
	const [currency, setCurrency] = useState(''); // Состояние для хранения выбранной валюты
	const [currencyList, setCurrencyList] = useState([]); // Состояние для хранения списка доступных валют
	const [result, setResult] = useState(''); // Состояние для хранения текущего результата конвертации
	const [results, setResults] = useState([]); // Состояние для хранения всех результатов конвертации

	// Базовый URL для API конвертации валют
	const urlExchangeAPI =
		'https://v6.exchangerate-api.com/v6/89d46101920b814df23336c8/latest/';

	// Значение по умолчанию для валюты
	const defaultCurrency = 'RUB';

	// Асинхронная функция для получения списка валют
	const getData = async () => {
		try {
			// Выполнение GET запроса к API для получения кодов валют
			const response = await axios.get(
				'https://v6.exchangerate-api.com/v6/89d46101920b814df23336c8/codes'
			);
			// Установка списка валют в состояние
			setCurrencyList(response.data.supported_codes);
		} catch (error) {
			// Вывод ошибки в консоль, если запрос не удался
			console.error('Ошибка при загрузке данных:', error);
		}
	};

	// useEffect для вызова функции getData при монтировании компонента
	useEffect(() => {
		getData(); // Получение данных сразу после монтирования компонента
	}, []);

	// useEffect для сохранения результатов конвертации в localStorage
	useEffect(() => {
		localStorage.setItem('exchange_result', JSON.stringify(results)); // Сохранение результатов в localStorage
	}, [results]); // Зависимость - выполняется при изменении результатов

	// Асинхронная функция для обработки конвертации валют
	const handleInputChange = async () => {
		try {
			// Выполнение GET запроса к API с указанием базовой валюты (RUB)
			const response = await axios.get(urlExchangeAPI + defaultCurrency);
			// Извлечение конверсионных курсов из ответа
			const { conversion_rates } = response.data;
			// Получение курса конверсии для выбранной валюты
			const conversion_rate = conversion_rates[currency];
			// Вычисление сконвертированной суммы с округлением до 2 знаков после запятой
			const convertedAmount = (amount * conversion_rate).toFixed(2);
			// Форматирование результата
			setResult(
				`${amount} ${defaultCurrency} = ${convertedAmount} ${currency}`
			);
			// Обновление списка результатов, если результат существует
			if (result) setResults(prevResults => [...prevResults, result]);
		} catch (error) {
			// Вывод ошибки в консоль, если конвертация не удалась
			console.error('Ошибка при конвертации:', error);
		}
	};

	return (
		<div className='converter'>
			<h1>Конвертер</h1>
			<input
				type='number'
				min={0}
				value={amount} // Привязка значения к состоянию amount
				onChange={e => setAmount(e.target.value)} // Обновление состояния при изменении
				placeholder='Введите сумму в рублях'
			/>
			<label>Выберите валюту:</label>
			<select value={currency} onChange={e => setCurrency(e.target.value)}>
				<option value=''>Выберите валюту</option>{' '}
				{currencyList.map((currency, i) => (
					<option key={i} value={currency[0]}>
						{currency[1]}
					</option>
				))}
			</select>
			<button onClick={handleInputChange}>Конвертировать</button>
			{result && <p>{result}</p>}{' '}
			{results.map((result, i) => (
				<div key={i}>
					<p>{result}</p>
				</div>
			))}
		</div>
	);
}

export default Converter;
