import React from "react";
import { styled } from "styled-components";

type FormTitleType = {
  title: string;
};

const FormTitleWrapper = styled.div`
  color: #fff;
  width: 100%;
  margin-bottom: 20px;
`;
const FormTitle = ({ title }: FormTitleType) => {
  return (
    <FormTitleWrapper>
      <h1>{title}</h1>
    </FormTitleWrapper>
  );
};

export default FormTitle;
