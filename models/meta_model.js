var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var MetaSchema   = new Schema({
    filename: String,
    basename: {type: String, index: true},
    ext: String,
    atime: Date,
    mtime: Date,
    ctime: Date,
    birthtime: Date,
    filetype: {type: String, index: true},
    author: {type: String, index: true},
    editor: {type: String, index: true},
    createdate: {type: Date, index: true},
    modifydate: {type: Date, index: true},
    title: String,
    company: {type: String, index: true},
    raw: Mixed,
    properties: Mixed,
    location: Mixed
});

MetaSchema.set("_perms", {
    admin: "crud",
    owner: "crud",
    user: "r",
    all: ""
});

module.exports = mongoose.model('Meta', MetaSchema);