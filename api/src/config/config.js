require('dotenv').config();

const env = process.env;

const config = {
  db: {
    host: env.DB__HOST,
  },
  storage: {
    accessKeyId: env.STORAGE__ACCESS_KEY_ID,
    secretAccessKey: env.STORAGE__SECRET_ACCESS_KEY,
  },
  stripe: {
    key: env.STRIPE__KEY,
  },
};

module.exports = config;
