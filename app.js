const express = require('express')

const app = express()

app.use('/one',(req, res, next) => {
    res.send('<h1>Page one</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Home</h1>')
})


app.listen(3000)