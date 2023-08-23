import React from "react";

type FormTitleType = {
  title: string;
};

const FormTitle = ({ title }: FormTitleType) => {
  return (
    <div className="form-title">
      <h1>{title}</h1>
    </div>
  );
};

export default FormTitle;
