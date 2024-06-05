const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: String, // Store the file data as a base64-encoded string
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
