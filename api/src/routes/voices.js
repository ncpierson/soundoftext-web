const express = require('express');
const tts = require('google-translate-tts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(tts.voices);
});

module.exports = router;
