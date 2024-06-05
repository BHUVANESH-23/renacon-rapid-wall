const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const File = require('./Schema'); // Import the File model

app.use(express.json());
app.use(cors());

const mongoURL = "mongodb+srv://Bhuvanesh:b8tBVrx5PAHe4Ilv@cluster0.n6g3qey.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const conn = mongoose.connection;

conn.once('open', () => {
    console.log("Connected to database");
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/upload-files", upload.single("pdfFile"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const newFile = new File({
            filename: req.file.originalname,
            contentType: req.file.mimetype,
            data: req.file.buffer.toString('base64') // Convert file buffer to base64
        });
        await newFile.save();
        res.status(200).json({ message: "File uploaded successfully", file: newFile });
    } catch (error) {
        console.error("Error uploading file:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

app.get("/", (req, res) => {
    res.send("Success!!!");
});

app.get('/files/:filename', async (req, res) => {
    try {
        const file = await File.findOne({ filename: req.params.filename });
        if (!file) {
            return res.status(404).json({ error: 'No file exists' });
        }
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/files', async (req, res) => {
    try {
        const files = await File.find();
        if (!files || files.length === 0) {
            return res.status(404).json({ error: 'No files exist' });
        }
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/files/download/:filename', async (req, res) => {
    try {
        const file = await File.findOne({ filename: req.params.filename });
        if (!file) {
            return res.status(404).json({ error: 'No file exists' });
        }
        const fileBuffer = Buffer.from(file.data, 'base64');
        res.set('Content-Type', file.contentType);
        res.send(fileBuffer);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
