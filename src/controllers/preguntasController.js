const res = require('express/lib/response');
const Preguntas = require('../models/preguntas')

class PreguntasController{
    
        register(req, res){
            let objPreguntas = req.body;
            if(objPreguntas.pregunta && objPreguntas.resp1 && objPreguntas.resp2 && objPreguntas.resp3 && objPreguntas.resp4){
                Preguntas.create(objPreguntas,(err, data)=>{
                    if(err){
                        res.status(500).json({info: err})
                    }else{
                        res.status(201).json({info: 'Pregunta Almacenada en la Base de Datos'})
                    }
                })
            }else{
                res.status(400).json({info: 'Información Incompleta'})
            }
        }
        getAllPreguntas=(req, res)=>{
            Preguntas.find({}, (error, data)=>{
                if(error){
                    res.status(500).json({info: error});
                }else{
                    res.status(200).json(data);
                }
            });
        }
}
module.exports = PreguntasController;