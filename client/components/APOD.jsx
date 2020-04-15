import React from 'react'
import request from 'superagent'


// const apiKey= 'zhxmVk9zWbkrhQGxSfxpZLKcSTL61Fwu7C2nX2se'
const apiUrl= 'https://pokeapi.co/api/v2/pokemon/1/'



class APOD extends React.Component {
  state = {
    // title: '',
    // explanation: '',
    // hdurl: ''
    id: '',
   name: '',
    height: '',
    weight:'',
  }

componentDidMount() {
  request.get(apiUrl)
  //  .query({api_key:apiKey})
   .then(res => {
     const {id, name, height, weight} = res.body
     this.setState({id, name , height, weight})
   })
}

render () {
  return (
    <>
    <h2>Pokemon</h2>
  
    <img src={this.state.hdurl}/>
    <div>Pokemon Id:{this.state.id}</div>
    <div>Name:{this.state.name}</div>
    <div>Height:{this.state.height}</div>
    <div>Weight:{this.state.weight}</div>
    </>
  )
}


}

export default APOD