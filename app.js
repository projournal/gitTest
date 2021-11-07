'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	
	let cat = 10;

	res.render('index');
	
});

app.listen(8080, () => console.log('listening'));
