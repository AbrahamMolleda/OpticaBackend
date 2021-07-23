const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de Aplicacion
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y Parseo del Body()
        this.app.use(express.json());

        // Directorio Publico
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios.routes'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        })
    }
}

module.exports = Server;