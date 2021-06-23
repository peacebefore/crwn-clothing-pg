import React from "react";

import * as S from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <S.GroupContainer>
    <S.FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <S.FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </S.FormInputLabel>
    ) : null}
  </S.GroupContainer>
);

export default FormInput;
