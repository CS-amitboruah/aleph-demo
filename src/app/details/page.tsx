"use client";
import FormTitle from "@/components/common/FormTitle";
import BasicDetails from "@/components/forms/BasicDetails";
import { FormWrapper } from "@/styles/Globalstyles";

const page = () => {
  return (
    <FormWrapper>
      <FormTitle title="Your details" />
      <BasicDetails />
    </FormWrapper>
  );
};

export default page;
