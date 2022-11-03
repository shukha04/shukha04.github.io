document.getElementById('year').innerHTML = new Date().getFullYear().toString()

document.getElementById('form').addEventListener('submit', (event) => {
	event.preventDefault()

	const data = {
		name: undefined,
		email: undefined,
		message: undefined
	}

	data.name = document.getElementById('name').value
	data.email = document.getElementById('email').value
	data.message = document.getElementById('message').value

	console.log(data)
})
