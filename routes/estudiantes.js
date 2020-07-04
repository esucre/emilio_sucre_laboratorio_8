const express = require('express');
const router = express.Router();
const Estudiantes = require('../models/Estudiantes');



router.get('/', async (req, res) => {
    const estudiantes = await Estudiantes.find();
    res.render('index', {
        estudiantes
    });
});

router.post('/agregar', async (req, res) => {
    const { nombre, edad } = req.body;
    await Estudiantes.create({ nombre, edad }, (err, estudiantes) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    res.redirect('/');
});

router.get('/:id', async (req, res) => {
    try {
        const estudiante = await Estudiantes.findById(req.params.id).select('nombre edad');
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        res.json({});
    }
});


router.put('/editar/:id', async (req, res) => {
    try {
        Estudiantes.findById(req.params.id, function (err, estudiante) {

            estudiante.nombre = req.body.nombre;
            estudiante.edad = req.body.edad;
            estudiante.save();
        })



    } catch (error) {
        console.log(error);
        res.json({});
    }

    res.json({
        mensaje: "Actualizado"
      });
    
});


router.delete('/eliminar/:id', async (req, res) => {
    try {
        Estudiantes.deleteOne({ _id: req.params.id }, function (err, estudiante) { });
    } catch (error) {
        console.log(error);
        res.json({});
    }    
    res.json({
        mensaje: "Eliminado"
      });
    
});







module.exports = router;