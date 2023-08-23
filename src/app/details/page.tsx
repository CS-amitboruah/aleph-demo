'use client';
import AntButton from '@/components/common/Button/Button';
import FormTitle from '@/components/common/FormTitle';
import TextInput from '@/components/formControls/TextInput';
import {
  PhoneNumberRegex,
  ageMatch,
  formConstants,
} from '@/constants/contants';
import { FormWrapper } from '@/styles/Globalstyles';
import { Form } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const searchParams = useSearchParams();

  const handleNext = (values: any) => {
    let params = new URLSearchParams();
    let landingData = searchParams.get('landing');
    landingData !== null && Object.assign(values, JSON.parse(landingData));
    params.set('details', JSON.stringify(values));
    router.push(`/localisation?${params}`);
  };

  return (
    <FormWrapper>
      <FormTitle title='DETAILS PAGE' />
      <Form form={form} onFinish={handleNext}>
        <TextInput
          type='text'
          placeholder='Age'
          name='age'
          rules={[
            {
              required: true,
              message: formConstants.ageRequire,
            },
            {
              pattern: ageMatch,
              message: formConstants.invalidAge,
            },
          ]}
        />
        <TextInput
          type='text'
          placeholder='Phone'
          name='phone'
          rules={[
            {
              required: true,
              message: formConstants.phoneRequire,
            },
            {
              pattern: PhoneNumberRegex,
              message: formConstants.phoneInvalid,
            },
          ]}
        />

        <AntButton htmlType='submit' text='Next' />
      </Form>
    </FormWrapper>
  );
};

export default page;
