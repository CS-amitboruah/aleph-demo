"use client";
import { Form } from "antd";
import TextInput from "@/components/formControls/TextInput";
import AntButton from "@/components/common/Button/Button";
import { formConstants } from "@/constants/formContants";
import { useRouter } from "next/navigation";
import { FormWrapper } from "@/styles/Globalstyles";
import FormTitle from "@/components/common/FormTitle";

export default function Home() {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleNext = (values: any) => {
    const params = new URLSearchParams();
    params.set("landing", JSON.stringify(values));
    router.push(`/details?${params}`);
  };

  return (
    <>
      <FormWrapper>
        <FormTitle title="About you" />
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
