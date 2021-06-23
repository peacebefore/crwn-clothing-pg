import React from "react";

import * as S from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <S.CartItemContainer>
    <S.CartItemImage src={imageUrl} alt="item" />
    <S.ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </S.ItemDetailsContainer>
  </S.CartItemContainer>
);

export default CartItem;
