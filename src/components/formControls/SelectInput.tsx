import { SelectInputProps } from "@/types/formControl.type";
import { Form, Select } from "antd";
import { styled } from "styled-components";

const SelectWrapper = styled(Form.Item)``;

const SelectInput = ({
  options,
  placeholder,
  name,
  label,
  rules,
}: SelectInputProps) => {
  return (
    <SelectWrapper name={name} label={label} rules={rules}>
      <Select
        placeholder={placeholder}
        options={options?.map((item: any) => ({
          value: item.value,
          label: item.label,
          disabled: item.disabled ? item.disabled : false,
        }))}
      />
    </SelectWrapper>
  );
};

export default SelectInput;
