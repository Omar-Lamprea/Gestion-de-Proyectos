const Usuarios = require('../model/usuarioModel')


const buscarUsuarioPorIdentificacion = async (id) => 
    await Usuarios.findOne({identificacion: id})


const getUsuarios = async ()=>{
	return await Usuarios.find({})
}


module.exports = {
    buscarUsuarioPorIdentificacion,
    getUsuarios
}