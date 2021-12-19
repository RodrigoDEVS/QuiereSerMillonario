const { request } = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Preguntas = require('../models/preguntas')

class PreguntasController {
    //Método para registrar nuevas preguntas(no es accequible mediante interfáz, solo con postman o consumiendo la API)
    register(req, res) {
        let objPreguntas = req.body;
        if (objPreguntas.pregunta && objPreguntas.resp1 && objPreguntas.resp2 && objPreguntas.resp3 && objPreguntas.resp4 && objPreguntas.verdadera) {
            Preguntas.create(objPreguntas, (err, data) => {
                if (err) {
                    res.status(500).json({ info: err })
                } else {
                    res.status(201).json({ info: 'Pregunta Almacenada en la Base de Datos' })
                }
            })
        } else {
            res.status(400).json({ info: 'Información Incompleta' })
        }
    }
    //Metodo para traer todo el Array
    getAllPreguntas = (req, res) => {
        Preguntas.find({}, (error, data) => {
            if (error) {
                res.status(500).json({ info: error });
            } else {
                res.status(200).json(data);
            }
        });
    }
    //Metodo para traer un objeto por su id
    getPreguntaById = (req, res) => {
        let id = req.params.id;
        Preguntas.findById(id, (err, data) => {
            if (err) {
                res.status(500).send({ message: `error al realizar la peticion ${err}` })
            } else {
                res.status(200).json({ data });
            }
        })
    }
    //Metodo para traer un objeto por el atributo "indice"
    getPregunta = (req, res) => {
        let index = req.params.indice
        const query = Preguntas.findOne({ indice: index }, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json({ data })
            }
        });
    }
}
module.exports = PreguntasController;