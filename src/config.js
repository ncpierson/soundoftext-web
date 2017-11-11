const env = process.env.REACT_APP_ENV || 'development';

const config = {
  production: {
    donationsApi: 'https://soundoftext.com/api',
    soundsApi: 'https://soundoftext.com/api',
    stripeKey: 'pk_live_URckThi75hi6SJSNus2TEGQp'
  },
  staging: {
    donationsApi: 'https://staging.soundoftext.com/api',
    soundsApi: 'https://staging.soundoftext.com/api',
    stripeKey: 'pk_live_URckThi75hi6SJSNus2TEGQp'
  },
  development: {
    donationsApi: 'http://192.168.1.45:9000',
    soundsApi: 'http://192.168.1.45:9000',
    stripeKey: 'pk_test_8qABw2drK8NX6pFmbzQG399U'
  }
};

module.exports = config[env];
