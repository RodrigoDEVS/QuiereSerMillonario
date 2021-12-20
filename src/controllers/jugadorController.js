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
    getAllJugadores = (req, res) => {
        Jugador.find({}, (error, data) => {
            if (error) {
                res.status(500).json({ info: error });
            } else {
                res.status(200).json(data);
            }
        });
    }
}
module.exports = JugadorController;