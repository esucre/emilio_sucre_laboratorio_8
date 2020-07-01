const express = require('express');
const router = express.Router();
const Estudiantes = require('../models/Estudiantes');



router.get('/agregar', async (req, res) => {
    res.render('add_student', {
        title: 'Agregar Estudiante',
      });
    const estudiantes = await Estudiantes.find({}, ['id', 'nombre', 'edad']);
    res.json({
        estudiantes,
        cantidad: estudiantes.length
    });
});

router.post('/agregar', async (req, res) => {

    res.render('add_student', {
      title: 'Agregar Estudiante',
    });

    const { nombre, edad } = req.body;
    await Estudiantes.create({nombre, edad });
    res.writeContinue('Agregado exitosamente')
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


router.put('/:id', async (req, res) => {    
    try {
        Estudiantes.findById(req.params.id, function(err, estudiante) {      

            estudiante.nombre = req.body.nombre; 
            estudiante.edad = req.body.edad; 
            estudiante.save();
            })
    

      
    } catch (error) {
        console.log(error);
        res.json({});
    }

    let respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Actualizado exitosamente',
    };

    res.send(respuesta);
});


router.delete('/:id', async (req, res) => {    
    try {
         Estudiantes.deleteOne({_id: req.params.id},function(err, dog) {}); 
    } catch (error) {
        console.log(error);
        res.json({});
    }

    let respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Eliminado exitosamente',
    };

    res.send(respuesta);
});







module.exports = router;