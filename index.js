const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

var app = express()

mongoose.Promise = Promise
mongoose.connect(process.env.bd_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var bd = mongoose.connection
bd.on('error', console.error.bind(console, 'ERREUR CONNECTION : '))
bd.once('open', () => console.log("STATUT BD : ", bd.states[bd._readyState]))

app.use(express.static('./public/'))
app.use(express.json())
app.use(cors({ origin: '*', exposedHeaders: 'autorization' }))

const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Serveur en cour sur " + HOST + ":" + PORT);
})