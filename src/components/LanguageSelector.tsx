import { Select } from "antd";
import { redirect } from "next/navigation";

type SelectorType = {
  pathLang: string;
  name: string;
};
const LanguageSelector = ({ pathLang, name }: SelectorType) => {
  return (
    <Select
      defaultValue={pathLang}
      options={[
        { label: "EN", value: "en" },
        { label: "BM", value: "bm" },
      ]}
      onChange={async (value: string) => {
        "use server";
        redirect(`/${value}/user/${name}`);
      }}
    />
  );
};

export default LanguageSelector;
