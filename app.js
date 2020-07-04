require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const connectDb = require('./dbConfig');


const Estudiantes = require('./models/Estudiantes');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.use('/',require('./routes/estudiantes'));


connectDb().then(() => {
    app.listen(app.get('port'), ()=>{
        console.log("Lister on port", app.get('port'));
    });
});