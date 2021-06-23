import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import * as S from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <S.CollectionPreviewContainer>
    <S.TitleContainer
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </S.TitleContainer>
    <S.PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </S.PreviewContainer>
  </S.CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
