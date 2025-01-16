const { response } = require("express")
const { USER, EMAIL, PASS } = process.env;

const validarCredenciales = (req, res = response, next) => {
    const { user, email, pass } = req.body;

    if (user !== USER) {
        return res.status(400).json({
            ok: false,
            msg: 'El usuario ingresado es incorrecto'
        });
    }

    if (email !== EMAIL) {
        return res.status(400).json({
            ok: false,
            msg: 'El correo electrónico ingresado es incorrecto'
        });
    }

    if (pass !== PASS) {
        return res.status(400).json({
            ok: false,
            msg: 'La contraseña ingresada es incorrecta'
        });
    }

    next();
}

module.exports = {
    validarCredenciales
}