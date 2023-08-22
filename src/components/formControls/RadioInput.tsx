import { RadioInputProps } from "@/types/formControl.type";
import { Form, Radio } from "antd";

const RadioInput = ({ name, label, rules }: RadioInputProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Radio>{label}</Radio>
    </Form.Item>
  );
};

export default RadioInput;
