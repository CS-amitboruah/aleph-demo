'use client';
import AntButton from '@/components/common/Button/Button';
import FormTitle from '@/components/common/FormTitle';
import SelectInput from '@/components/formControls/SelectInput';
import { formConstants } from '@/constants/formContants';
import { createUser } from '@/lib/createUser';
import { FormWrapper } from '@/styles/Globalstyles';
import { Form } from 'antd';
import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const [form] = Form.useForm();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    let detailsData = searchParams.get('details');
    detailsData !== null && Object.assign(values, JSON.parse(detailsData));
    createUser(values);
    router.push('/users');
  };
  return (
    <FormWrapper>
      <FormTitle title='LANGUAGE PAGE' />
      <Form form={form} onFinish={handleSubmit}>
        <SelectInput
          options={[
            { label: 'English (EN)', value: 'EN' },
            { label: 'Bambara (BM)', value: 'BM' },
          ]}
          placeholder='Select'
          name='language'
          rules={[
            {
              required: true,
              message: formConstants.languageRequired,
            },
          ]}
        />
        <AntButton htmlType='submit' text='Submit' />
      </Form>
    </FormWrapper>
  );
};

export default page;
