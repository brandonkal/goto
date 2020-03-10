'use strict'

module.exports = (event, context) => {
	let redirect

	if (event.path == '/home') {
		redirect = 'https://brandonkalinowski.com/'
	} else if (event.path == '/inlets') {
		redirect = 'https://inlets.dev'
	} else if (event.path == '/k3sup') {
		redirect = 'https://k3sup.dev'
	} else if (event.path == '/github') {
		redirect = 'https://github.com/brandonkal'
	} else if (event.path == '/git') {
		redirect = 'https://github.com/brandonkal'
	}

	process.stderr.write(event.path)

	if (!redirect) {
		return context.status(400).fail('Unknown short URL')
	}
	context
		.status(302)
		.headers({ location: redirect })
		.succeed()
}
