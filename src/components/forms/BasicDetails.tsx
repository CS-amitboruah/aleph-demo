"use client";
import { Form } from "antd";
import React from "react";
import TextInput from "../formControls/TextInput";
import {
  PhoneNumberRegex,
  ageMatch,
  formConstants,
} from "@/constants/formContants";
import AntButton from "../common/Button/Button";
import { useRouter, useSearchParams } from "next/navigation";

const BasicDetails = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const searchParams = useSearchParams();

  const handleNext = (values: any) => {
    const params = new URLSearchParams();
    let landingData = searchParams.get("details");
    let decodedDetails = landingData
      ? JSON.parse(decodeURIComponent(landingData))
      : null;
    params.set(
      "moreDetails",
      encodeURIComponent(JSON.stringify({ ...values, ...decodedDetails }))
    );
    router.push(`/localisation?${params}`);
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
  );
};

export default BasicDetails;
