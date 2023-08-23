import { Button } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

const ButtonWrapper = styled(Button)`
  padding: 12px 32px;
  height: auto;
  font-size: 18px;
  font-weight: 600;
  background-color: #ff7a00;
  color: #fff;
  border: none;
  &:hover {
    color: #fff !important;
  }
`;
type ButtonProps = {
  text: string;
  htmlType?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
};
const AntButton = ({ text, htmlType, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper htmlType={htmlType || 'button'} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

export default AntButton;
