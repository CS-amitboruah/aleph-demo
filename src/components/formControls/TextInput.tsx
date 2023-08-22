import { TextInputProps } from "@/types/formControl.type";
import { Form, Input } from "antd";
import { styled } from "styled-components";

const TextInputWrapper = styled(Form.Item)`
  position: relative;
  .floating-placeholder {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    color: #fff;
    font-size: 18px;
    /* opacity: 0.9; */
    color: #ccc;
    &.input-placeholder {
      top: -20px;
      color: #fff;
      font-size: 16px;
    }
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
  const onChange = (e: any) => {
    setInitialState && setInitialState({ [name]: e.target.value });
  };
  console.log(value);

  return (
    <TextInputWrapper name={name} rules={rules} className="input-container">
      <Input
        type={type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
      />
      <span
        className={
          value && value.length > 0
            ? "floating-placeholder input-placeholder"
            : "floating-placeholder"
        }
      >
        {label}
      </span>
    </TextInputWrapper>
  );
};
export default TextInput;
