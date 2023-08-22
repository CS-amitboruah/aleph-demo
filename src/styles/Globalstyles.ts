import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #1800e7;
  }
`;

export const FormWrapper = styled.div`
  padding: 20px;
  width: 40vw;
  max-height: 80vh;
  overflow-y: auto;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-form {
    width: 100%;
    .ant-form-item {
      margin-bottom: 40px;
      .ant-form-item-control-input {
        .ant-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid #fff;
          border-radius: 0;
          padding: 5px 0;
          color: #fff;
          font-size: 16px;
          &::placeholder {
            color: #fff;
            opacity: 0.8;
          }
          &:focus {
            + span {
              top: -20px;
              color: #fff;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
