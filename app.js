const express = require('express')
const router = require('./routes/index')
const port = 5454
const multer = require('multer')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)

app.listen(port, () => {
    console.log(`Listening to the port: ${port}`)
})