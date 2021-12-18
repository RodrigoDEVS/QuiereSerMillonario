const {Schema, model} = require('mongoose');

const preguntasSchema = Schema({
    id: {
        type: Number
    },
    pregunta: {
        type: String
    },
    resp1: {
        type: String
    },
    resp2: {
        type: String
    },
    resp3: {
        type: String
    },
    resp4: {
        type: String
    },
    verdadera: {
        type: String
    },
    premio: {
        type: Number
    }
},{
    collection: 'preguntas'
});

module.exports = model('Preguntas', preguntasSchema);