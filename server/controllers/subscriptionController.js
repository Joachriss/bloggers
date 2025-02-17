import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

//  authorization
const subscriptionPlan = async (req, res) => {
  console.log('azampay');
  try {
    const response = await axios.post(`${process.env.AZAMPAY_AUTHANTICATOR_URL}/AppRegistration/GenerateToken`, {
      appName: process.env.AZAMPAY_APP_NAME,
      clientId: process.env.AZAMPAY_CLIENT_ID,
      clientSecret: process.env.AZAMPAY_SECRET_ID,
    });
    res.status(201).json({ message: 'Subscribed successfully', response: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}


//  Checkout
const checkout = async (req, res) => {
  const response = req.body;
  // console.log(response.response.data.accessToken);
  let body = {
    'accountNumber': '0658191222',
    'amount': '2000',
    'currency': 'TZS',
    'externalId': '123',
    'provider': 'Tigo',
    'additionalProperties': {
      'property1': null,
      'property2': null
    }
  }
  const checkoutResponse = await axios.post(`${process.env.AZAMPAY_CHECKOUT_URL}/azampay/mno/checkout`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${response.response.data.accessToken}`,
    }
  });
  console.log(checkoutResponse.data);
  res.json(checkoutResponse.data);
}

export {
  subscriptionPlan,
  checkout
}