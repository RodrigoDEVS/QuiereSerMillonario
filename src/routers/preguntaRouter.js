const axios = require('axios')
const {Router} = require('express');
const PreguntasController = require('../controllers/preguntasController');

class PreguntasRouter{
    constructor(){
        this.router = Router();
        this.#config();

    }
    #config(){
        const preguntasC = new PreguntasController();
        this.router.post('/preguntas', preguntasC.register);
        this.router.get('/preguntas', preguntasC.getAllPreguntas);
        this.router.get('/preguntas/:id', preguntasC.getPreguntaById);
        this.router.get('/preguntas/indice/:indice', preguntasC.getPregunta);
    }
}
module.exports = PreguntasRouter;