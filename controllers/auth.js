const { response } = require('express');
const { generarJWT } = require('../helpers/jwt')

const obtenerToken = async(req, res = response) => {
    const { user, email } = req.body;

    const uid = email; 
    const name = user;

    try {

        const token = await generarJWT( uid, name );

        res.status(201).json({
            ok: true,
            uid,
            name,
            token
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al generar el token',
        })
        
    }
}

module.exports = {
    obtenerToken
}