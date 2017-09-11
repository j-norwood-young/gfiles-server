var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var FiletypeSchema   = new Schema({
    name: { type: String, index: true },
    count: Number
});

FiletypeSchema.set("_perms", {
    admin: "crud",
    owner: "crud",
    user: "r",
    all: ""
});

module.exports = mongoose.model('Filetype', FiletypeSchema);