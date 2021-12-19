const Jugador = require('../models/jugador');

class JugadorController{
    registrarJugador=(req,res)=>{
        let objJugador = req.body;
        if(objJugador.name);
            Jugador.create(objJugador, (err, data)=>{
                if(err){
                    res.status(500).json({message: `Error al crear jugador ${err}`})
                }else{
                    res.status(201).json({info: `Jugador almacenado en la base de datos`})
                }
            })
    }
}
module.exports = JugadorController;