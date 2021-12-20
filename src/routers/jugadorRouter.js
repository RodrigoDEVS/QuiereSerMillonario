const {Router} = require('express');
const JugadorController = require('../controllers/jugadorController');

class JugadorRouter{
    constructor(){
        this.router = Router();
        this.#config();
    }
    #config(){
        const jugadorC = new JugadorController();
        this.router.post('/jugador', jugadorC.registrarJugador);
        this.router.get('/jugador', jugadorC.getAllJugadores);
    }
}
module.exports = JugadorRouter;