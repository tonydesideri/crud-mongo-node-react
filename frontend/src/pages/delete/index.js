import React, { Component } from 'react'
import axios from 'axios'
import { Link , Redirect} from 'react-router-dom'
import './styles.css'


export default class Delete extends Component {

  constructor(props){
    super(props)
      
      this.state = {
        curso: {},
        redirect: false
      }
    
  }

  async componentDidMount(){
    
    const {id} = this.props.match.params
    const response =  await axios.get(`http://localhost:3001/cursos/${id}`)
    console.log(response.data)
    this.setState({curso: response.data}) 

  }

  handleClick = event => {
    const { id } = this.props.match.params

      fetch(`http://localhost:3001/cursos/${id}`, {
        method: "delete"
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
          <fieldset>
              <div className="delete">
                <h5>Você tem certeza?</h5>
                <h1>{this.state.curso.nome}</h1>
                <br/>

                <button onClick={this.handleClick}>Deletar</button>

                <Link to={`/`}>Inicio</Link>

              </div>
          </fieldset>
        )
      }

  }

}