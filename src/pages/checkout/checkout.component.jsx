import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import * as S from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <S.CheckoutPageContainer>
    <S.CheckoutHeaderContainer>
      <S.HeaderBlockContainer>
        <span>Product</span>
      </S.HeaderBlockContainer>
      <S.HeaderBlockContainer>
        <span>Description</span>
      </S.HeaderBlockContainer>
      <S.HeaderBlockContainer>
        <span>Quantity</span>
      </S.HeaderBlockContainer>
      <S.HeaderBlockContainer>
        <span>Price</span>
      </S.HeaderBlockContainer>
      <S.HeaderBlockContainer>
        <span>Remove</span>
      </S.HeaderBlockContainer>
    </S.CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <S.TotalContainer>TOTAL: ${total}</S.TotalContainer>
    <S.WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </S.WarningContainer>
    <StripeCheckoutButton price={total} />
  </S.CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
