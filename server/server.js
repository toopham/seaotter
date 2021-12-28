const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

//test
app.get('/api/test', (req, res) => res.status(200).json({Message: 'CALLED API SUCCESSFULLY'}));


//Error Catching from Middleware
app.use((req,res) => res.status(404).json('CANNOT FIND PAGE'));
app.use( (err, req, res, next) => {
	return res.redirect(500,'/');
});


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
