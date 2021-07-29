const express = require('express')
const router = require('./routes/index')
const port = 5454
const multer = require('multer')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(router)

app.listen(port, () => {
    console.log(`Listening to the port: ${port}`)
})