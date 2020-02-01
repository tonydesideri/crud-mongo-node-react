import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles.css'


export default class Cursos extends Component {

  state = {
    cursos:[],
    cursosInfo: {},
    page: "1"
  }

  componentDidMount(){
    this.loadCursos()
  }

  loadCursos = async( page = 1 ) => {
    const response = await axios.get(`http://localhost:3001/cursos?page=${page}`)
    
    const {docs, ...cursosInfo} = response.data
    
    this.setState({ cursos: docs, cursosInfo, page})
  }

  prevPage = () => {
    const {page} = this.state
    if(page === 1) return

    const pageNumber = page - 1
    this.loadCursos(pageNumber)
  }

  nextPage = () => {
    const {page, cursosInfo} = this.state
    if(page === cursosInfo.pages) return

    const pageNumber = page + 1
    this.loadCursos(pageNumber)
  }


  render(){
    
    const { cursos, cursosInfo, page} = this.state

    return(
      <div className="selectAll">
        <p><Link to="/insert">Cadastrar cursos</Link></p>
          {cursos.map( curso => (
            <article key={curso._id}>
              <strong>{curso.nome}</strong>
              <p>R$ {curso.valor},00</p>
              <p><Link to={`/cursos/${curso._id}`}>Detalhes</Link></p>
            </article>
          ))}  

          <div className="actions">

            <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
            <button disabled={page===cursosInfo.pages} onClick={this.nextPage}>Próxima</button>

          </div>

      </div>
    )
  }

}