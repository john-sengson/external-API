import React from 'react'
import request from 'superagent'


const apiKey= 'zhxmVk9zWbkrhQGxSfxpZLKcSTL61Fwu7C2nX2se'
const apiUrl= 'https://api.nasa.gov/planetary/apod'



class APOD extends React.Component {
  state = {
    title: '',
    explanation: '',
    hdurl: ''
  }

componentDidMount() {
  request.get(apiUrl)
   .query({api_key:apiKey})
   .then(res => {
     const {title, explanation, hdurl} = res.body
     this.setState({title,explanation,hdurl})
   })
}

render () {
  return (
    <>
    <h2>API POD</h2>
    <div>{this.state.title}</div>
    <img src={this.state.hdurl}/>
    <div>{this.state.explanation}</div>
    </>
  )
}


}

export default APOD