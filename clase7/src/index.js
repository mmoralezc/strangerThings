let vistaUsuarios = require('./vistas/vistaUsuarios')
require('./controllers/filtros').init()
let generacionDatos = require('./services/generacionDatos')

let usuOrigs = generacionDatos.obtenerDatosOriginales()

console.log(usuOrigs)

vistaUsuarios()

