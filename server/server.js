// archivo de configuracion
require ('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const listusuarios = [
    { id: 1, nombre: 'jose', apellido: 'molina' },
    { id: 2, nombre: 'angie', apellido: 'suarez' },
    { id: 3, nombre: 'diana', apellido: 'carolina' },
];






app.get('/usuario/:id', function (req, res) {

    const iduser = parseInt(req.params.id);

    const getUser = () => listusuarios[iduser];

    let user = getUser();

    res.json(user);

});


app.post('/usuario/', function (req, res) {

    let body = req.body;


    res.json({
        pesona: body
    });

});

app.put('/usuario/', function (req, res) {
    res.json(usuarios);
});

app.delete('/usuario/', function (req, res) {
    res.json(usuarios);
});











// Correr el servidor
app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000')
})