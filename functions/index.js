const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const request = require('request');
const tts = require('google-tts-api');

const config = {
  projectId: 'sound-of-text-3ba84',
  keyFileName: './keyfile.json'
}

const storage = require('@google-cloud/storage')(config);

exports.sounds = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method != "POST") {
      res.status(404).end();
    }

    const text = req.body.text;
    const voice = req.body.voice;

    tts(text, voice).then(url => {
      return storeSound(text, url);
    }).then(path => {
      return saveSound(text, voice, path);
    }).then(sound => {
      res.json(sound);
    });
  });
});

function storeSound(text, url) {
  return new Promise(function(resolve, reject) {
    const filePath = `sounds/${text}`;

    const bucket = storage.bucket('sound-of-text-3ba84.appspot.com');
    const file = bucket.file(filePath);
    const fileStream = file.createWriteStream();

    request({
      url: url,
      headers: { 'User-Agent': 'SoundOfTextBot (soundoftext.com)' }
    }).on('error', (err) => {
      console.log(err);
      reject(err);
    }).pipe(fileStream).on('finish', () => {
      resolve(filePath);
    }).on('error', function(err) {
      console.log(err);
      reject(err);
    });
  });
}

function saveSound(text, voice, path) {
  console.log(path);
  return { id: 1, path: path };
}
