const express = require('express'),
  router = express.Router(),
  config = require('../config/config'),
  stripe = require('stripe')(config.stripe.key);

const toDonation = charge => ({
  created: charge.created,
  amount: charge.amount / 100
});

router.post('/', function(req, res) {
  const token = req.body.token;
  const amount = req.body.amount;

  const charge = stripe.charges.create(
    {
      amount: amount,
      currency: 'usd',
      source: token,
      statement_descriptor: 'SOUNDOFTEXT_DONATION'
    },
    function(err, charge) {
      if (err) {
        console.error('Donation Error');
        console.error(err);

        res.status(500).json({ success: false, error: err });
        return;
      }

      const donation = toDonation(charge);
      res.json({ success: true, donation: donation });
    }
  );
});

module.exports = router;
