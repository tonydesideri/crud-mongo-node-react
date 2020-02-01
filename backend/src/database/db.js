const mongoose = require ('mongoose')

mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb+srv://virtualcurso:virtualcurso@cluster0-bgdyc.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true
})

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', () => {
  console.error('Erro ao conectar no banco de dados')
})

db.on('open', () => {
  console.log('Banco de dados conectato')
})

module.exports = mongoose

