const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleListSchema = new Schema({
    imageName: {type:String, required: true},
    Image: {type: String, require: true},
    Title: {type: String, require: true},
    Author: {type: String, require: true},
    UpdateAt: {type: Date, require: true},
    Content: {type: String, require: true},
})

module.exports = mongoose.model("article_lists",ArticleListSchema);