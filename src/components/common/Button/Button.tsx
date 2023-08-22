import { Button } from "antd";
import React from "react";
import { styled } from "styled-components";

const ButtonWrapper = styled(Button)`
  padding: 12px 32px;
  height: 100%;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: balck;
  }
`;
type ButtonProps = {
  text: string;
  htmlType?: "button" | "reset" | "submit";
  onClick?: () => void;
};
const AntButton = ({ text, htmlType, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper htmlType={htmlType || "button"} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

export default AntButton;
