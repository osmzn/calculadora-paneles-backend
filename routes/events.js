/*
    Rutas de Eventos / Events
    host + /api/events
*/

const { Router } = require('express')
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos')
const { calcularPaneles } = require('../controllers/events')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.post(
    '/calcularPaneles',
    [
        validarJWT,
        check('a','El alto del panel es obligatorio y debe ser un numero entero').not().isEmpty().isInt(),
        check('b','El ancho del panel es obligatorio y debe ser un numero entero').not().isEmpty().isInt(),
        check('y','El alto del techo es obligatorio y debe ser un numero entero').not().isEmpty(),
        check('y','El alto del techo solo permite valores enteros y entre min: 1, max: 10').isInt({ min: 1, max: 10 }),
        check('x','El ancho del techo es obligatorio y debe ser un numero entero').not().isEmpty(),
        check('x','El ancho del techo permite valores enteros y entre min: 1, max: 26').isInt({ min: 1, max: 26 }),
        validarCampos
    ],
    calcularPaneles
)

module.exports = router;