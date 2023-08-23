"use client";

import AntButton from "@/components/common/Button/Button";
import FormTitle from "@/components/common/FormTitle";
import TextInput from "@/components/formControls/TextInput";
import {
  PhoneNumberRegex,
  ageMatch,
  formConstants,
} from "@/constants/formContants";
import { FormWrapper } from "@/styles/Globalstyles";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleNext = (values: any) => {
    console.log(values);
    router.push("/localisation", { scroll: false });
  };

  return (
    <FormWrapper>
      <FormTitle title="Your details" />
      <Form form={form} onFinish={handleNext}>
        <TextInput
          type="text"
          placeholder="Age"
          name="age"
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
          type="text"
          placeholder="Phone"
          name="phone"
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

        <AntButton htmlType="submit" text="Next" />
      </Form>
    </FormWrapper>
  );
};

export default page;
