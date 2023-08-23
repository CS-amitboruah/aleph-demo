'use client';
import TableTitle from '@/components/common/TableTitle';
import { TableWrapper } from '@/styles/Globalstyles';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { getAllUser } from '../../lib/getAllUser';
import AntButton from '../../components/common/Button/Button';
import { getTotalUser } from '../../lib/getTotalUser';

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
  phone: number;
  language: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },

  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
  },
];

const page = () => {
  const [totalUser, setTotalUser] = useState<number>(0);
  const [userData, setUserData] = useState<DataType[]>([]);

  getTotalUser().then((res) => setTotalUser(res.total));

  const handleListRecord = async () => {
    let response = await getAllUser();
    setUserData(response?.data);
  };

  return (
    <TableWrapper>
      <TableTitle title='FINAL PAGE' />
      <span>
        Current Records: {totalUser || 0}{' '}
        {userData?.length === 0 && (
          <AntButton text='List Record' onClick={() => handleListRecord()} />
        )}
      </span>
      {userData?.length > 0 && (
        <Table columns={columns} dataSource={userData} pagination={false} />
      )}
    </TableWrapper>
  );
};

export default page;
