import React from 'react';
import { styled } from 'styled-components';

type TableTitleType = {
  title: string;
};

const TableTitleWrapper = styled.div`
  color: #fff;
  width: 100%;
  margin-bottom: 20px;
`;
const TableTitle = ({ title }: TableTitleType) => {
  return (
    <TableTitleWrapper>
      <h1>{title}</h1>
    </TableTitleWrapper>
  );
};

export default TableTitle;
