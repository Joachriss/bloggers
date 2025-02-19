import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import paymentModel from '../models/paymentModel.js';
import {generatePaymentId} from '../utils/generatePaymentId.js';


//  Checkout
const checkout = async (req, res) => {
  try {
    const transactionRequest = req.body;

    // Authorization process
    const response = await axios.post(`${process.env.AZAMPAY_AUTHANTICATOR_URL}/AppRegistration/GenerateToken`, {
      appName: process.env.AZAMPAY_APP_NAME,
      clientId: process.env.AZAMPAY_CLIENT_ID,
      clientSecret: process.env.AZAMPAY_SECRET_ID,
    });

    if (response.data.success === false) {
      return res.json(response.data);
    }

    // Create transaction in database
    const transactinData = await paymentModel.create({
      paymentId: generatePaymentId(),
      amount: transactionRequest.amount,
      userId: transactionRequest.userId,
    });

    // Checkout process
    let body = {
      'accountNumber': transactionRequest.account,
      'amount': transactionRequest.amount,
      'currency': 'TZS',
      'externalId': transactinData.paymentId,
      'provider': transactionRequest.provider,
      'additionalProperties': {
        'property1': null,
        'property2': null
      }
    }

    const checkoutResponse = await axios.post(`${process.env.AZAMPAY_CHECKOUT_URL}/azampay/mno/checkout`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${response.data.data.accessToken}`,
      }
    });

    // Update transaction in database
    if (checkoutResponse.data.success === false) {
      await paymentModel.findOneAndUpdate({ paymentId: transactinData.paymentId }, {
        status: 'failed',
      });
      return res.json(checkoutResponse.data);
    }

    // Update transaction in database
    let endDate = null;
    if(transactionRequest.plan == 'week') {
      const plan = 'week';
      endDate = Date.now() + 7 * 24 * 60 * 60 * 1000;
    }else if(transactionRequest.plan == 'month') {
      const plan = 'month';
      endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    } 
    await paymentModel.updateOne({ paymentId: transactinData.paymentId }, {
      $set: {
        status: 'success',
        plan: transactionRequest.plan,
        expiresAt: endDate
      }
    });

    console.log(checkoutResponse.data);
    res.json(checkoutResponse.data);
    

  } catch (error) {
    console.error(error);
  }
}

// payment list
const getPaymentList = async (req, res) => {
  try {
    const paymentList = await paymentModel.find().populate('userId');
    res.json(paymentList);
  } catch (error) {
    console.error(error);
  }
}

export {
  checkout,
  getPaymentList
}