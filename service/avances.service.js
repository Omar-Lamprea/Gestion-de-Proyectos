const Avance = requre('../model/avancesModel')
const Project = require('../model/proyectoModel')
const User = require('../model/usuarioModel')



const createAvance = async(idAvance) =>{
  const nuevoAcance = new Avance(idAvance);
  return nuevoAcance.save()
    .then( u => 'Avance Creado')
    .catch(err => console.log(err))
}



module.exports = {
  createAvance
}
