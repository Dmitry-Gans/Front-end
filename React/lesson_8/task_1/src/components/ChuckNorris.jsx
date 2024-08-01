import { useState } from 'react';

function ChuckNorris() {
	const [joke, setJoke] = useState('');
	const [jokes, setJokes] = useState([]);
	const [img, setImg] = useState(null);

	const getPublicData = async () => {
		try {
			const response = await fetch('https://api.chucknorris.io/jokes/random');
			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`);
			}
			const data = await response.json();
			setJoke(data.value);
			setJokes([...jokes, data.value]);
			setImg(data.icon_url);
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
		}
	};

	return (
		<div>
			<h1>Шутки о Чак Норисе</h1>
			<button onClick={getPublicData}>Сгенерировать шутку</button>
			<br></br>
			{img && <img src={img} alt='Шутка' />}
			{joke && <p>{joke}</p>}
			<h2>История шуток:</h2>

			{jokes.map((jok, index) => (
				<li key={index}>{jok}</li>
			))}
		</div>
	);
}

export default ChuckNorris;
