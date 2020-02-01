const mongoose = require ('mongoose')

const Curso = mongoose.model('Curso')

module.exports = {

  //Cadastro de curso
  async insert(req, res) {

    const cadastrarCurso = await Curso.create(req.body)
      
    return res.json(cadastrarCurso)

  },
 
  //Listar todos os cursos
  async selectAll(req, res) {

    const { page } = req.query

    const listarCursos = await Curso.paginate({}, {  limit: 4, page})
    
    return res.json(listarCursos)
  
  },

  //Listar um curso
  async selectOne(req, res) {

    const listarCurso = await Curso.findById(req.params.id)
    
    return res.json(listarCurso)
    
  },

  //Editar curso
  async update(req, res) {

    const atualizarCurso = await Curso.findByIdAndUpdate(
      req.params.id, { $set: {
        nome: req.body.nome,
        linguagem: req.body.linguagem,
        descricao: req.body.descricao,
        valor: req.body.valor,
        aulas:  req.body.aulas
    }}, { new: true})

    return res.json(atualizarCurso)
    
  },

  //Deletar curso
  async delete(req, res) {
    
    await Curso.deleteOne({_id: req.params.id}, function (err) {})
    
    return res.send('')
  
  }
}

