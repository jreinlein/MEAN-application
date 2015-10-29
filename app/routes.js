// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {
	// SERVER ROUTES

	// handle things like API calls
	// authentication routes

	// sample API route
	app.get('/api/nerds', function(req, res) {
		// use mongoose to get all nerds in the db
		Nerd.find(function(err, nerds) {
			// if there is an error retrieving, send the error.
			if (err)
				res.send(err);

			// continues only if no error was sent
			res.json(nerds); // return all nerds in JSON
		});
	});

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

	// FRONT-END ROUTES

	// route to handle all angular requests
	app.get('*', function(req, res) {
		// load our public/index.html file
		res.sendfile('./public/index.html'); 
	});
};