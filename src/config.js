const env = process.env.REACT_APP_ENV || 'development';

const config = {
  production: {
    donationsApi: 'https://api.soundoftext.com',
    soundsApi: 'https://api.soundoftext.com',
    stripeKey: 'pk_live_URckThi75hi6SJSNus2TEGQp'
  },
  development: {
    donationsApi: 'http://dev.nick.exposed:9000',
    soundsApi: 'http://dev.nick.exposed:9000',
    stripeKey: 'pk_test_8qABw2drK8NX6pFmbzQG399U'
  }
};

module.exports = config[env];
