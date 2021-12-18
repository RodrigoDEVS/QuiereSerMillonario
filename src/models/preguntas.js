const {Schema, model} = require('mongoose');

const preguntasSchema = Schema({
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
    }
},{
    collection: 'preguntas'
});

module.exports = model('Preguntas', preguntasSchema);