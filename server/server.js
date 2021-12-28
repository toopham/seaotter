const express = require('express');
const app = express();
const githubController = require('./controllers/githubController');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());

//test
app.get('/api/test', (req, res) => res.status(200).json({Message: 'CALLED API SUCCESSFULLY'}));
app.get('/api/github', githubController.test, (req, res) => res.status(200).json(res.locals.results));


app.post('/api/search', githubController.search, (req, res) => res.status(200).json(res.locals.results));


//Error Catching from Middleware
app.use((req,res) => res.status(404).json('CANNOT FIND PAGE'));
app.use( (err, req, res, next) => {
	return res.redirect(500,'/');
});


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
