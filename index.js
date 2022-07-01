const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const pages = require('./pages')
const basePath = path.join(__dirname, 'templates')

app.use('/pages', pages)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})