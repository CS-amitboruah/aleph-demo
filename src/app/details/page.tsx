"use client";

import AntButton from "@/components/common/Button/Button";
import TextInput from "@/components/formControls/TextInput";
import { formConstants } from "@/constants/formContants";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [initialState, setInitialState] = useState({
    age: "",
    phone: "",
  });
  const router = useRouter();
  const [form] = Form.useForm();

  const handleNext = (values: any) => {
    console.log(values);
  };

  const handleBack = () => {
    router.push("/", { scroll: false });
  };

  return (
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
        ]}
        value={initialState.age}
        setInitialState={setInitialState}
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
        ]}
        value={initialState.phone}
        setInitialState={setInitialState}
      />

      <AntButton text="Back" onClick={handleBack} />
      <AntButton htmlType="submit" text="Next" />
    </Form>
  );
};

export default page;
