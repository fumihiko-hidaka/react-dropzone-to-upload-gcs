const { Storage } = require('@google-cloud/storage');
const Readable = require('stream').Readable;

const options = {
  projectId: process.env.PROJECT_ID
};

if (process.env.SERVICE_ACCOUNT_KEY) {
  // ローカル環境用
  options.keyFilename = process.env.SERVICE_ACCOUNT_KEY;
}

const uploadPromise = (uploadPath, buffer) => {
  return new Promise((resolve, reject) => {
    const storageClient = new Storage(options);
    const bucket = storageClient.bucket(process.env.UPLOAD_BUCKET);

    const uploadFile = bucket.file(uploadPath);
    const uploadStream = uploadFile.createWriteStream({
      predefinedAcl: 'publicRead',
      metadata: {
        cacheControl: 'no-cache',
        contentType: 'image/jpeg',
      },
    });

    const readStream = new Readable();
    readStream.push(buffer);
    readStream.push(null);

    readStream
      .on('error', reject)
      .pipe(uploadStream)
      .on('error', reject)
      .on('finish', resolve);
  });
};

module.exports = uploadPromise;
