var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;
var User = require("./user_model");
var Tag = require("./tag_model");

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
    location: Mixed,
    flags: [ {
            user_id: { type: ObjectId, ref: "User", index: true, required: true },
            date_created: { type: Date, default: Date.now },
        }
    ],
    tags: [ { type: ObjectId, ref: "User", index: true, required: true } ],
    notes: [
        {
            user_id: { type: ObjectId, ref: "User", index: true, required: true },
            date_created: { type: Date, default: Date.now },
            note: String
        }
    ],
    body: String,
});

MetaSchema.set("_perms", {
    admin: "crud",
    owner: "crud",
    user: "r",
    all: ""
});

module.exports = mongoose.model('Meta', MetaSchema);