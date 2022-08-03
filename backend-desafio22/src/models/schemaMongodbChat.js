const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema([
  { id: {type: String, require: true, max: 50}, 
  mensajes:[
    { author:{
      timestamp: {type: String, require: true, max: 50},
      id: {type: String, require: true, max: 50},
      nombre:{type: String, require: true, max: 50},
      apellido:{type: String, require: true, max: 50},
      edad:{type: String, require: true, max: 50},
      alias:{type: String, require: true, max: 50},
      avatar:{type: String, require: true, max: 250},
    },
    text: {type: String, require: true, max: 500}
  }]
  }
])

const chatModel = mongoose.model('mdb_mensaje', chatSchema)

module.exports = chatModel
