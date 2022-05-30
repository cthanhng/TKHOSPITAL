const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    Image: {type: String, require: true},
    ArticleID: {type: String, require: true},
    Title: {type: String, require: true},
    Author: {type: String, require: true},
    Content: {type: String, require: true},
})

module.exports = mongoose.model("articles",ArticleSchema);