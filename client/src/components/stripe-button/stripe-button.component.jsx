import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IGZh2CBMSD9L0WHM0EbwT2BIk1r1bjq4B4tWjkobf2u0GPkQZ3VVRTZGx6df3ZW3G9Msnxn6wRyMilRqYyRcyA800blYIYark';

  const onToken = token => {
    axios({ 
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful')
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.'
          );
      }); 
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;