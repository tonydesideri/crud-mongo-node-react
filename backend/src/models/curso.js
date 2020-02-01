const mongoose = require ('../database/db')
const mongoosePaginate = require('mongoose-paginate')

const cursoSchema =  new mongoose.Schema({
  nome:{
    type: String,
    required: true
  },

  linguagem:{
    type: String,
    required: true
  },

  descricao:{
    type: String,
    required: true
  },

  valor:{
    type: String,
    required: true
  },

  aulas:{
    type: String,
    required: true
  }
})

cursoSchema.plugin(mongoosePaginate)

mongoose.model('Curso', cursoSchema )