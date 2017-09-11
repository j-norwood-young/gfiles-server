var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var AuthorSchema   = new Schema({
    name: { type: String, index: true, unique: true },
    count: Number
});

AuthorSchema.set("_perms", {
    admin: "crud",
    owner: "crud",
    user: "r",
    all: ""
});

module.exports = mongoose.model('Author', AuthorSchema);