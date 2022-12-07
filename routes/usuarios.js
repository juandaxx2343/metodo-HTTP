const { Router } = require('express')
const router = Router() // Obtener la función router

const {getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/usuarios')

router.get('/', getUsuario)
router.post('/', postUsuario)
router.put('/', putUsuario)
router.delete('/', deleteUsuario)

module.exports = router