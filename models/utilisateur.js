var mongoose = require('mongoose')
var { isEmail } = require('validator')
var bcrypt = require('bcrypt')

const utilisateurSchema = new mongoose.Schema({
    nom: { type: String, requrid: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, validate: isEmail, unique: true },
    mp: { type: String, required: true },
    telephone: { type: String, required: true, max: 10, unique: true },
    statut: { type: String, required: true }
})

utilisateurSchema.pre('save', async function(next) {
    let salt = await bcrypt.genSalt()
    this.mp = await bcrypt.hash(this.mp, salt)
    next()
})

var utilisateurModel = mongoose.model('utilisateur', utilisateurSchema)

module.exports = utilisateurModel