// // load environment variables like the API key from Stripe
// // using the config method
// require('dotenv').config()

// const express = require('express')
// const app = express()

// // since app will send over info/data in json format
// // need this to be able to read those data
// app.use(express.json())
// app.use(express.static('../../Components'))

// // stripe library
// // passing in the stripe key being stored in .env file which is set up by dotenv package
// const stripe = require('stripe')(process.env.STRIP_KEY)

// // storing items of the shop in Map because of key/pair values
// const storeItems = new Map([
//     [1, {priceInCents: 100, name: 'Wilson Character Unlock'}],
//     [2, {priceInCents: 200, name: 'Willow Character Unlock'}]
// ])

// app.listen(4242, () => {
//     console.log("Server running on port 4242")
// })

// This is your test secret API key.
const stripe = require('stripe')('sk_test');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    // success_url: 'https://example.com/success',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PLRpM2NegYeTfbFWmtSXWix',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send(session);
});

app.get('/sessions/:id', async (req, res) => {
    const stripe = require('stripe')('sk_test_51PLFek2NegYeTfbF20Spl9JSdtGAo97wqwIhhpRjSgKUip6X2pZDti5tOkuH225uZqvDDxMQxjdM15xw1X7NJBMr00g3Oi11DS');

    const session = await stripe.checkout.sessions.retrieve(
    'cs_test_a11YYufWQzNY63zpQ6QSNRQhkUpVph4WRmzW0zWJO2znZKdVujZ0N0S22u'
    );
    res.send(session)
})

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
// console.log(session);
  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.get('/session-list', async (req, res) => {
    const stripe = require('stripe')('sk_test_51PLFek2NegYeTfbF20Spl9JSdtGAo97wqwIhhpRjSgKUip6X2pZDti5tOkuH225uZqvDDxMQxjdM15xw1X7NJBMr00g3Oi11DS');

    const sessions = await stripe.checkout.sessions.list({
        limit: 3,
    });
    res.send(sessions)
})

app.listen(4242, () => console.log('Running on port 4242'));