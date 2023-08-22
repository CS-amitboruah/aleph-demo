"use client";
import FormTitle from "@/components/common/FormTitle";
import SelectInput from "@/components/formControls/SelectInput";
import Globalstyles, { FormWrapper } from "@/styles/Globalstyles";
import { Form } from "antd";
import React from "react";

const page = () => {
  const [form] = Form.useForm();
  return (
    <FormWrapper>
      <FormTitle title="Localisation" />
      <Form form={form}>
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
              message: "Select language is required",
            },
          ]}
        />
      </Form>
    </FormWrapper>
  );
};

export default page;
