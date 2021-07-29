const express = require('express')
const app = express()
const multer = require('multer')
const router = require('./routes/index')
const port = 5454

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(port, () => {
    console.log(`Listening to the port: ${port}`)
})