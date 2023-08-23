// "use client";
import UserCardDetails from "@/components/UserCardDetails";
import { Card } from "antd";
import React from "react";
import { getContent } from "../../../../../getContent";
import { staticLabelType } from "@/types/user.type";
import LanguageSelector from "@/components/LanguageSelector";
import { getUser } from "@/lib/getUser";

type DisplayUserType = {
  locale: string;
  name: string;
};
const DisplayUser = async ({
  params: { locale, name },
}: {
  params: DisplayUserType;
}) => {
  const user = await getUser(name);
  const staticContent: staticLabelType | any = await getContent(locale);

  return (
    <div className="user-detail-wrapper">
      <div className="final-page-title">
        <h3>Final Page</h3>
        <LanguageSelector pathLang={locale} name={name} />
      </div>

      <Card title="User Details" bordered={false} style={{ width: 400 }}>
        <UserCardDetails
          title="Basic Details"
          key1={staticContent.name}
          key2={staticContent.email}
          value1={user?.data?.name}
          value2={user?.data?.email}
        />
        <UserCardDetails
          title="More Details"
          key1={staticContent.age}
          key2={staticContent.phone}
          value1={user?.data?.age}
          value2={user?.data?.phone}
        />
        <UserCardDetails
          title="User prefered language "
          key1={staticContent.language}
          value1={user?.data?.language}
        />
      </Card>
    </div>
  );
};

export default DisplayUser;
