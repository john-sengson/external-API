import React from 'react'
import request from 'superagent'


// const apiKey= 'zhxmVk9zWbkrhQGxSfxpZLKcSTL61Fwu7C2nX2se'
// const apiUrl= 'https://pokeapi.co/api/v2/pokemon/4/'
const apiUrl = 'http://localhost:3000/api/vi/pokemon/4'

const imageStyle = {
  width: '100px',
  height: '100px',
  marginTop: '15px',
  marginBottom: '15px'

}

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
     <div className= 'pokebox'>
      <h2>Pokemon</h2>
      <img src='https://pokeres.bastionbot.org/images/pokemon/4.png' style = {imageStyle} />
      <div>Pokemon Id:{this.state.id}</div>
      <div>Name:{this.state.name}</div>
      <div>Height:{this.state.height}</div>
      <div>Weight:{this.state.weight}</div>
    </div>
    </>
   )
 }
}

export default APOD