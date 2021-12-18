const express = require('express');
const morgan = require('morgan');
const connDb = require('./database/connDb');
const IndexRouter = require('./routers/indexRouter');
const PreguntasRouter = require('./routers/preguntaRouter');

class Server{
    constructor(){
        this.conn = new connDb();
        this.app = express();
        this.#config();
    }
    #config(){
        this.app.use(express.json());
        this.app.use(morgan('Nueva Petición'));
        this.app.set('PORT', process.env.PORT || 3000);
        const indexR = new IndexRouter();
        const preguntasR = new PreguntasRouter();
        this.app.use(indexR.router);
        this.app.use(preguntasR.router);
        let puerto = this.app.get('PORT');
        this.app.listen(puerto, ()=>{
            console.log(`Servidor Corriendo Por el Puerto: ${puerto}`)
        });
    }
}
new Server();