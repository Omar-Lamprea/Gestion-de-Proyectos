const { Schema, model } = require('mongoose')

const usuario = new Schema({
    nombre: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        unique: true,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        default: "Inactivo"
    },
    correo:{
        type: String,
        unique:true,
        required:true
    },
    clave: {
        type: String,
        required: true
    }
})
module.exports = model('usuarios', usuario, "Usuarios")