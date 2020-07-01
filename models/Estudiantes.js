const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  id: {type: String},
  nombre: { type: String },
  edad: { type: String },
});

const Estudiantes = mongoose.model('Estudiantes', schema);

module.exports = Estudiantes;

