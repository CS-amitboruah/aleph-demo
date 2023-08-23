"use client";
import FormTitle from "@/components/common/FormTitle";
import Localisation from "@/components/forms/Localisation";
import { FormWrapper } from "@/styles/Globalstyles";

const page = async () => {
  return (
    <FormWrapper>
      <FormTitle title="Localisation" />
      <Localisation />
    </FormWrapper>
  );
};

export default page;
