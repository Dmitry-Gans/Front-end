// Задание 1
// ● Создайте функциональный компонент Greeting, который
// принимает проп name и отображает сообщение Привет, {name}!.
// ● Используйте компонент Greeting в вашем основном компоненте
// App, передавая разные имена в качестве пропсов.

function Greeting({ name }) {
	return <p>Привет, {name}!</p>
}

export default Greeting