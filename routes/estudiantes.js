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

// router.get('/editar/:id', async (req, res) => {
//     try {
//        const estudiante = await Estudiantes.findById(req.params.id);
//        res.render('edit_student',{
//         estudiante
//     });
//     console.log(estudiante);
//     } catch (error) {
//         console.log(error);
//         res.json({});
//     }    
// });

router.get('/editar/:id', async (req, res) => {
    await Estudiantes.findById(req.params.id, (err, estudiante) => {
        res.json({
            status:true,
            estudiante
        });
    });
});


// router.put('/editar/:id', async (req, res) => {
//     try {
//         Estudiantes.findById(req.params.id, function (err, estudiante) {

//             estudiante.nombre = req.body.nombre;
//             estudiante.edad = req.body.edad;
//             estudiante.save();
//             res.json({
//                 estudiante
//             });
//             console.log(req.params.id);
//             console.log(estudiante);
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({});
//     }

//     res.json({
//         mensaje: "Actualizado"
//       });

// });


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