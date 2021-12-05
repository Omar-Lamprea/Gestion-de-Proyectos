const { Router } = require('express')
const signIn = require('../controller/auth.controller')

const route = Router();

route.use((request,response,next)=>{

  //  response.header()
next()
})

route.post('/login', signIn)

module.exports = route