// this module represents the localhost server on the current machine

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const uuid = require("uuid")

const consolish = require('./routes/consolish');
app.use('/consolish', consolish);

app.listen(3000)
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

session = {
    id: uuid.v4(),
    posts: []
}