const mongoose = require('mongoose');

const LinkSchema = mongoose.Schema({
    name: String,
    url: String,
    content: String
})

const Links = mongoose.model('links', LinkSchema)

module.exports = Links