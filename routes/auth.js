/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const { obtenerToken } = require('../controllers/auth')
const { validarCredenciales } = require('../middlewares/validarCredenciales')

const router = Router()

router.post('/obtenerToken', validarCredenciales , obtenerToken )

module.exports = router;