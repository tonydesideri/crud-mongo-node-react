import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './styles.css'
import axios from 'axios'


class Insert extends Component{
  constructor (props){
    super(props)

      this.state = {
        curso: {
          nome:"",
          linguagem: "",
          descricao: "",
          valor: "", 
          aulas: 0
        },
        redirect: false
      } 
  }

  async componentDidMount(){
    
    const {id} = this.props.match.params
    console.log({id})
    const response =  await axios.get(`http://localhost:3001/cursos/${id}`)
    this.setState({curso: response.data}) 

  }

  handleInput = event => {

    const target = event.target
    const name = target.name
    const value = target.value

    this.setState(prevState => ({
      curso: {...prevState.curso, [name]: value}
    }))
  }

  handleSubmit = event => {
      const { id } = this.props.match.params

      fetch(`http://localhost:3001/cursos/${id}`, {
        method: "put",
        id: id,
        body: JSON.stringify(this.state.curso),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data => {
        if(data.ok){
          this.setState({redirect: true})
        }
      })

      event.preventDefault()
  }


  render(){
    const { redirect } = this.state
    if ( redirect ) {
      return <Redirect to="/"/>
    }else{
      return(
        <form onSubmit={this.handleSubmit}>
          <fieldset>
          <legend>Editar curso</legend>

          <div className="update">
            <label htmlFor="nome">Título do curso</label>
            <br/>
            <input 
              type="text"
              id="nome"
              name="nome"
              required
              value={this.state.curso.nome}
              onChange={this.handleInput}
            />
          </div>

          <div className="update">
            <label htmlFor="linguagem">Palavra chave:</label>
            <br/>
            <input 
              type="text"
              id="linguagem"
              name="linguagem"
              required
              value={this.state.curso.linguagem}
              onChange={this.handleInput}
            />
          </div>

          <div className="update">
            <label htmlFor="descricao">Descrição: </label>
            <br/>
            <input 
              type="text"
              id="descricao"
              name="descricao"
              required
              value={this.state.curso.descricao}
              onChange={this.handleInput}
            />
          </div>

          <div className="update">
            <label htmlFor="valor">Valor: R$ </label>
            <br/>
            <input 
              type="text"
              id="valor"
              name="valor"
              required
              value={this.state.curso.valor}
              onChange={this.handleInput}
            />
          </div>

          <div className="update">
            <label htmlFor="aulas">Aulas: </label>
            <br/>
            <input 
              type="number"
              id="aulas"
              name="aulas"
              required
              value={this.state.curso.aulas}
              onChange={this.handleInput}
            />
          </div>

          <button type="submit"> Atualizar </button>
          </fieldset>
        </form>
      )
    }


  }

}

export default Insert