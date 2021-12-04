const mongoose = require('mongoose')

//conexión a db real:
const urlDB ='mongodb+srv://omar:omar123@cluster0.sbp9l.mongodb.net/ProyectosInvestigacion?retryWrites=true&w=majority'

//conexión a db de prueba:
// const urlDB ='mongodb+srv://omar:omar123@cluster0.s4jxh.mongodb.net/proyectosInvestigacion?retryWrites=true&w=majority'

//conexión a db del profe:
// const urlDB ='mongodb+srv://daniel:udea28@cluster0.hcpun.mongodb.net/proyectosInvestigacion?retryWrites=true&w=majority'


mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("conectado a la bd")
})