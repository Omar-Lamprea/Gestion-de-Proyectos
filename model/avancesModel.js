const { Schema, model } = require('mongoose')


const avance = new Schema({
    idAvance: {
        type: String,
        required: true,
        unique: true
    },
    idProyecto:{
      type: String,
      required: true,
      unique: true
    },
    fechaAvance: Date,
    descripcion:{
      type: [String],
    },

},
    {
        timestamps: true
    }
)
module.exports = model('avances', avance)