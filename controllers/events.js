const { response } = require('express')

const calcularPaneles = async (req, res = response) => {

    //* a = alto panel
    //* b = ancho panel
    //* x = ancho techo
    //* y = alto techo 

    const { a, b, x, y } = req.body;

    try {

        const cantVerticalFirst = Math.floor(a < b ? y / b : y / a) * Math.floor(a < b ? x / a : x / b)
        const cantHorizontalSecond = Math.floor(a < b ? (y % b) / a : (y % a) / b) * Math.floor( a < b ? x / b : x / a)

        // if (a < b) {
        //     //* flujo normal
        //     cantVerticalFirst = Math.floor(y / b) * Math.floor(x / a)
        //     cantHorizontalSecond = Math.floor((y % b) / a) * Math.floor(x / b)
            
        // } else {
        //     //* Si el alto del panel es mayor al ancho del mismo, invierto sus valores para que siempre se calcule verticalmente primero y luego horizontal
            
        //     cantVerticalFirst = Math.floor(y / a) * Math.floor(x / b)
        //     cantHorizontalSecond = Math.floor((y % a) / b) * Math.floor(x / a)

        // }

        const maxPanel = cantVerticalFirst + cantHorizontalSecond

        res.status(201).json({
            ok: true,
            verticalFirst: {
                cantVerticalFirst,
                cantHorizontalSecond,
            },
            maxPanel
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un error, favor contacterse con el administrador'
        })
    }

};

module.exports = {
    calcularPaneles
}