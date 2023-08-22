"use client";
import { Form } from "antd";
import TextInput from "@/components/formControls/TextInput";
import AntButton from "@/components/common/Button/Button";
import { formConstants } from "@/constants/formContants";
import { useRouter } from "next/navigation";

import Globalstyles, { FormWrapper } from "@/styles/Globalstyles";

// import { FormWrapper } from "@/styles/Global.styles";

export default function Home() {
  const router = useRouter();
  const [form] = Form.useForm();
  const handleNext = (values: any) => {
    console.log(values);
    router.push("/details", { scroll: false });
  };

  return (
    <>
      <Globalstyles />

      <FormWrapper>
        <Form form={form} onFinish={handleNext}>
          <TextInput
            type="text"
            name="name"
            placeholder="Name"
            rules={[
              {
                required: true,
                message: formConstants.nameRequire,
              },
            ]}
          />
          <TextInput
            type="email"
            name="email"
            placeholder="Email Address"
            rules={[
              {
                required: true,
                message: formConstants.emailRequire,
              },
            ]}
          />

          <AntButton htmlType="submit" text="Next" />
        </Form>
      </FormWrapper>
    </>
  );
}
