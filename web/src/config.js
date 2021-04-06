const env = process.env;

const config = {
  donationsApi: env.REACT_APP_DONATIONS_API,
  soundsApi: env.REACT_APP_SOUNDS_API,
  stripeKey: env.REACT_APP_STRIPE_KEY
};

module.exports = config;
