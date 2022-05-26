const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleListSchema = new Schema({
    Image: {type: String, require: true},
    ArticleID: {type: String, require: true},
    Title: {type: String, require: true},
    Author: {type: String, require: true},
    UpdateAt: {type: Date, require: true},
    TimetoRead: {type: String, require: true},
})

module.exports = mongoose.model("article_lists",ArticleListSchema);