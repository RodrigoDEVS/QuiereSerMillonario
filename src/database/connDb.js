const mongoose = require('mongoose');
const { url } = require('./urlDb');

class connDb{
    constructor(){
        this.connection();

    }
    async connection(){
        this.connection = await mongoose.connect(url)
        .then(url => console.log('Conectado a la Base de Datos'))
        .catch(err => console.log(err))
    }
}

module.exports = connDb;