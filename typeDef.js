const { gql } = require('apollo-server-express')

//Nodemon
const typeDefs = gql`
    scalar Date

    type Usuario{
        nombre: String
        identificacion: Int
        estado: String
        correo: String
        rol: String
    }
    type Proyecto{
        nombre:String
        objetivosGenerales: String
        objetivosEspecificos: String
        presupuesto: Int
        fechaTerminacion: Date
        lider: String
        estado:String
    }   

    input UserInput{
        nombre: String
        identificacion:Int
        clave: String
        rol: String
        correo: String
    }
    input ProjectInput{
        objetivosGenerales: String
        presupuesto: Int
        fechaTerminacion: Date
        lider: String
        nombre:String
    }
    type Query{
        usuarios: [Usuario]
        usuario(identificacion: Int): Usuario
        proyectos:[Proyecto]
        getProject(nombre:String):Proyecto
    }
    type Mutation{
        createUser(user:UserInput):String
        createProject(project:ProjectInput):String
        activeUser(identificacion:Int):String
        deleteUser(identificacion:Int):String
        deleteProject(nombreProyecto:String):String
        insertUserToProject(identificacion:Int,nombreProyecto:String):String
        autenticar(usuario:String, clave:String):String
    }
`
module.exports = typeDefs
