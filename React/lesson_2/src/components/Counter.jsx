import { useState } from 'react'

// Задание 1
// ● Создать компонент Counter, который отображает кнопку и
// число.
// ● Число увеличивается на 1 каждый раз, когда пользователь
// нажимает на кнопку

function Counter() {
	const [count, setCount] = useState(0)
	return (
		<>
			<button onClick={() => setCount(count + 1)}>Нажать</button>
			<p>Количество нажатий: {count}</p>
		</>
	)
}

export default Counter
