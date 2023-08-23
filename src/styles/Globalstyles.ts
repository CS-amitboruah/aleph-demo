import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: rgb(33,62,147);
    background: linear-gradient(180deg, rgba(33,62,147,1) 0%, rgba(45,96,219,1) 100%);
  }
`;

export const FormWrapper = styled.div`
  padding: 20px;
  width: 40vw;
  overflow-y: auto;
  margin: 0 auto;
  height: calc(100vh - 40px);
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  input,
  .ant-select-selector {
    box-shadow: none !important;
  }
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
          box-shadow: none;
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
        .ant-select {
          border-bottom: 1px solid #fff;
          border-radius: 0;
          .ant-select-selection-item {
            color: #fff;
          }
          .ant-select-selection-placeholder {
            color: #fff;
            opacity: 0.8;
          }
          .ant-select-selector {
            background: transparent;
            border: none;
            padding: 0;
          }
        }
      }
    }
  }
`;

export const TableWrapper = styled.div`
  width: 70%;
  overflow-y: auto;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ant-table-wrapper {
    .ant-table {
      background-color: #c1ccff !important;
    }
    width: 100%;
    table {
      thead {
        th {
          background: #03144e;
          border-radius: 0 !important;
          color: #fff;
        }
      }
    }
  }
  span {
    color: white;
    text-align: left;
    width: 100%;
    margin-bottom: 10px;

    .ant-btn {
      margin-left: 10px;
      background: transparent;
      border: 1px solid #fff;
      padding: 6px 20px;
      font-size: 16px;
      span {
        margin-bottom: 0 !important;
      }
    }
  }
`;
