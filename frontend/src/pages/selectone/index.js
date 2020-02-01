import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles.css'


export default class SelectOne extends Component {

  state = {
    curso:{
      nome: "",
      linguagem: "",
      descricao: "",
      valor: "",
      aulas: 0
    }
  }

  async componentDidMount(){
    
    const {id} = this.props.match.params
    const response =  await axios.get(`http://localhost:3001/cursos/${id}`)
    console.log(response.data)
    this.setState({curso: response.data}) 

  }
 

  render(){
    
    const { curso } = this.state

    return(
      <div className="selectOne">
       
        <h1>{curso.nome}</h1>
        <h5>Palavra chave: {curso.linguagem}</h5>
        <p>{curso.descricao}</p>
        <p>R$ {curso.valor},00</p>
        <p>Aulas: {curso.aulas}</p>
        <br/>

        <Link to="/">Inicio</Link>
        <Link to="/update">Editar</Link>
        <Link to="/delete">Deletar</Link>

      </div>
    )
  }

}