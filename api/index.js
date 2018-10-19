require('dotenv').config();

const express = require('express');
const multer = require('multer');
const gcsUpload = require('./upload');

const app = express();
const upload = multer({ storage: multer.memoryStorage() }).single('file');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../front/dist'));

app.post('/upload', upload, async (req, res) => {
  await gcsUpload('react-dropzone-to-upload-gcs/upload.jpg', req.file.buffer);
  res.status(200).send('done upload.').end();
});

app.listen(process.env.PORT || 8080);
