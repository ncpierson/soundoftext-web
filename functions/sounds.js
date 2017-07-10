const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const request = require('request');
const tts = require('google-tts-api');

const config = {
  projectId: 'sound-of-text-3ba84',
  keyFileName: './keyfile.json'
}

const storage = require('@google-cloud/storage')(config);

module.exports = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method != "POST") {
      res.status(404).end();
    }

    const text = req.body.text;
    const voice = req.body.voice;

    tts(text, voice).then(url => {
      return storeSound(text, voice, url);
    }).then(path => {
      res.json({ path: path });
    });
  });
});

function storeSound(text, voice, url) {
  return new Promise(function(resolve, reject) {
    const filePath = `${voice}/${text}.mp3`;

    const bucket = storage.bucket('sound-of-text-3ba84.appspot.com');
    const file = bucket.file(filePath);
    const fileStream = file.createWriteStream();

    const requestOpts = {
      url: url,
      headers: { 'User-Agent': 'SoundOfTextBot (soundoftext.com)' }
    }

    request(requestOpts)
      .on('error', e => { log(e); reject(e); })
      .pipe(fileStream)
      .on('finish', () => resolve(filePath))
      .on('error', e => { log(e); reject(e); });
  });
}

function log(err) {
  console.log(err);
}
