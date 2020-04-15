import React from 'react'
import request from 'superagent'


// const apiKey= 'zhxmVk9zWbkrhQGxSfxpZLKcSTL61Fwu7C2nX2se'
const apiUrl= 'https://dog.ceo/api/breeds/image/random'



class APOD extends React.Component {
  state = {
    // title: '',
    // explanation: '',
    // hdurl: ''
    message: '',
    status: ''
  }

componentDidMount() {
  request.get(apiUrl)
  //  .query({api_key:apiKey})
   .then(res => {
     const {status, message} = res.body
     this.setState({status, message})
   })
}

render () {
  return (
    <>
    <h2>Random Dog</h2>
  
    <img src={this.state.message}/>
    <div>{this.state.status}</div>
    </>
  )
}


}

export default APOD