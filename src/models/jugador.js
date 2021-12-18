const {Schema, model} = require('mongoose');

const jugadorSchema = Schema({
    name: {
        type: String
    },
    acum:{
        type: Number
    }
},{
    collection: 'jugador'
});
module.exports = model('Jugador', jugadorSchema);