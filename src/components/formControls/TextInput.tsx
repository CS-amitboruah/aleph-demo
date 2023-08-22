import { TextInputProps } from "@/types/formControl.type";
import { Form, Input } from "antd";
import { styled } from "styled-components";

const TextInputWrapper = styled(Form.Item)`
  &::placeholder {
    color: #fff;
  }
`;
const TextInput = ({
  type,
  placeholder,
  name,
  rules,
  label,
  value,
  setInitialState,
}: any) => {
  return (
    <TextInputWrapper name={name} rules={rules} className="input-container">
      <Input type={type} placeholder={placeholder} className="input-field" />
    </TextInputWrapper>
  );
};
export default TextInput;
