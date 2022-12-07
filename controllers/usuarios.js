//const { query } = require('express')
const { response } = require('express')
const Usuario = require('../models/usuarios')

const getUsuario = async (req, res = response) => {
    const usuarios = await Usuario.find() // Buscar usuarios a través de todos los registros    
    res.json({
        msg: "GET API | Usuario",
        usuarios
    })
}

const postUsuario = async (req, res ) => {
    const { nombre, correo, password, rol, estado } = req.body
    
    // Instanciar el objeto con los parámetros recibidos
    const usuario = new Usuario ({ nombre, correo, password, rol, estado })
    // Guardar registro en la base de datos
    await usuario.save()

    res.json({
        msg: "POST API | Usuario",
        usuario
    })
}

const deleteUsuario = async (req, res) => {
    const { correo } = req.body

     await Usuario.findOneAndDelete({correo: correo})
     const usuarios = await Usuario.find()

    res.json({
        msg: "DELETE API | Usuario",
        usuarios
    })
}

const putUsuario = async (req, res) => {

    const { correoAnterior, correo, password, estado } = req.body
    console.log(req.body)
    
    await  Usuario.findOneAndUpdate({correo: correoAnterior}, {correo: correo, password: password, estado: estado}) 
    const usuario = await Usuario.find({correo: correo })
    res.json({  
        msg: "PUT API | Usuario",
        usuario
        
    })

}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
