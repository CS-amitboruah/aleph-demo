'use client';
import { Form } from 'antd';
import TextInput from '@/components/formControls/TextInput';
import AntButton from '@/components/common/Button/Button';
import { formConstants } from '@/constants/formContants';
import { useRouter } from 'next/navigation';
import { LandingPageWrapper } from '@/styles/LandingPageWrapper.styles';
import Globalstyles, { FormWrapper } from '@/styles/Globalstyles';
import { useState } from 'react';
// import { FormWrapper } from "@/styles/Global.styles";

export default function Home() {
  const [initialState, setInitialState] = useState({
    name: '',
    email: '',
  });
  const router = useRouter();
  const [form] = Form.useForm();
  const handleNext = (values: any) => {
    console.log(values);
    router.push('/details', { scroll: false });
  };
  const handleBack = () => {
    router.push('/', { scroll: false });
  };
  const nameValue = Form.useWatch('email', form);
  console.log(form);
  console.log(Form);
  console.log(form.getFieldValue('name'), 'name');
  return (
    <>
      <Globalstyles />
      <LandingPageWrapper>
        <FormWrapper>
          <Form form={form} onFinish={handleNext}>
            <TextInput
              type='text'
              name='name'
              label='Name'
              rules={[
                {
                  required: true,
                  message: formConstants.nameRequire,
                },
              ]}
              value={initialState.name}
              setInitialState={setInitialState}
            />
            <TextInput
              type='email'
              name='email'
              label='Email Address'
              rules={[
                {
                  required: true,
                  message: formConstants.emailRequire,
                },
              ]}
              value={initialState.email}
              setInitialState={setInitialState}
            />
            <div className='button-wrapper'>
              {/* <AntButton text="Back" /> */}
              <AntButton htmlType='submit' text='Next' />
            </div>
          </Form>
        </FormWrapper>
      </LandingPageWrapper>
    </>
  );
}
