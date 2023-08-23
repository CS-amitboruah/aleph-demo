"use client";
import AntButton from "@/components/common/Button/Button";
import FormTitle from "@/components/common/FormTitle";
import SelectInput from "@/components/formControls/SelectInput";
import { formConstants } from "@/constants/formContants";
import { createUser } from "@/lib/createUser";
import { FormWrapper } from "@/styles/Globalstyles";
import { Form } from "antd";
import React from "react";

const page = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    createUser({
      landing: { name: "ankit", email: "ankit.kumar@creolestudios.com" },
      detail: { age: "27", phone: "9198734469" },
      language: values.language,
    });
  };
  return (
    <FormWrapper>
      <FormTitle title="Localisation" />
      <Form form={form} onFinish={handleSubmit}>
        <SelectInput
          options={[
            { label: "English", value: "en" },
            { label: "Bambara", value: "bm" },
          ]}
          placeholder="Select"
          name="language"
          rules={[
            {
              required: true,
              message: formConstants.languageRequired,
            },
          ]}
        />
        <AntButton htmlType="submit" text="Submit" />
      </Form>
    </FormWrapper>
  );
};

export default page;
