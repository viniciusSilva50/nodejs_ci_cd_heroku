const express = require('express')
let app = express()


app.get('/', (req, res) => {
    res.status(200).send({name: 'Vinicius'})
})


let server = app.listen(3000, () => {
    console.log('Server listen on port', server.address().port)
    console.log('Server address', server.address().address)
})

module.exports = app