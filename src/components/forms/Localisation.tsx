import { createUser } from "@/lib/createUser";
import { Form } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import SelectInput from "../formControls/SelectInput";
import { formConstants } from "@/constants/formContants";
import AntButton from "../common/Button/Button";

const Localisation = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const searchParams = useSearchParams();

  const handleSubmit = async (values: any) => {
    let detailsData = searchParams.get("moreDetails");
    const decodedDetails = detailsData
      ? JSON.parse(decodeURIComponent(detailsData))
      : null;
    await createUser({ ...values, ...decodedDetails });
    router.push(`/${values.language}/user/${decodedDetails.name}`);
  };

  return (
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
  );
};

export default Localisation;
