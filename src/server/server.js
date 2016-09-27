var express = require('express'),
	path = require('path'),
	fs = require('fs'),
	bodyParser = require('body-parser'),
	// crypto = require('crypto'),
	// jwt = require('jsonwebtoken'),
	app = express();

// var db = require('../database/index');
// db.sequelize.sync({ force: false });

app.use(bodyParser.urlencoded({ extended: false }));

var staticAssetsPath = path.join(__dirname, '../../client');
app.use(express.static(staticAssetsPath));

// init
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});

var server = app.listen(8080, () => {
	console.log('Server started!');
});
