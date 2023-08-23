import { Rule } from "antd/lib/form";
export type FormInput = {
  name: string;
  rules: Rule[];
  placeholder?: string;
};

export type TextInputProps = {
  type: string;
  label?: string;
  value?: string;
} & FormInput;

type optionType = {
  label: string;
  value: string;
};

export type SelectInputProps = {
  options: optionType[];
  label?: string;
} & FormInput;
