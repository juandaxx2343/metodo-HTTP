const express = require('express') // Incluir express
const cors = require('cors') // Incluir cors
const dbConnection = require('../database/config') // Incluir db connection
const router = require('../routes/usuarios')

class server{
    constructor() {
        this.app = express()
        this.port = process.env.port

        this.usuariosPath = '/api/usuarios'
        //this.authPath = '/api/auth'

       // this.middlewares()

        this.routes() // Disparar el método routes
        this.dbConectar()
    }

    async dbConectar() {
        await dbConnection()
    }
/*
    middlewares() {
        this.app.use(cors())
        this.app.use(express.static("public"))

        // Permite peticiones json a la API
        this.app.use(express.json())
    }*/

    routes() {
        //this.app.use(this.authPath, require('../routes/auth'))
       // this.app.use(this.usuariosPath, require('../routes/usuarios'))
       this.app.use(express.json())
        this.app.use(this.usuariosPath, router )
        
    }

    listen() {
        this.app.listen(this.port, (req, res) => {
        console.log(`Servidor iniciado en http://localhost:${this.port}`)
        })
    }

}

module.exports = server








    /* --------------------------------
    routes() {
        this.app.get('/api', (req, res) => {.3
            //res.send('Home')
            res.json({
                msg: 'GET API'
            })
        })

        this.app.post('/api', (req, res) => {.3
            //res.send('Home')
            res.json({
                msg: 'POST API'
            })
        })
    }
    */