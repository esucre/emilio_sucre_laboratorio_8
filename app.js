require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connectDb = require('./dbConfig');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.get('/', function (req, res) {res.render('index');});
app.use('/api/estudiantes',require('./routes/estudiantes'));


connectDb().then(() => {
    app.listen(app.get('port'), ()=>{
        console.log("Lister on port", app.get('port'));
    });
});