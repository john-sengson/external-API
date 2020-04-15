const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const apiUrl= 'https://pokeapi.co/api/v2/pokemon/4/'


server.get('/api/vi/pokemon/4', (req, res) => {
   request.get(apiUrl)
   .then(apiRes => {
     const {id, name, height, weight} = apiRes.body
     res.json({id, name, height, weight})
   })
})

module.exports = server
