import React from "react";
import { withRouter } from "react-router-dom";

import * as S from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <S.MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <S.BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <S.ContentContainer className="content">
      <S.ContentTitle>{title.toUpperCase()}</S.ContentTitle>
      <S.ContentSubtitle>SHOP NOW</S.ContentSubtitle>
    </S.ContentContainer>
  </S.MenuItemContainer>
);

export default withRouter(MenuItem);
