import UserCardDetails from "@/components/UserCardDetails";
import { Card } from "antd";
import React from "react";

const page = ({ params }: any) => {
  console.log(params);
  return (
    <Card title="User Details" bordered={false} style={{ width: 300 }}>
      <UserCardDetails
        title="Basic Details"
        key1="Name"
        key2="Email Address"
        value1="Ankit"
        value2="an"
      />
      <UserCardDetails
        title="More Details"
        key1="Age"
        key2="Phone"
        value1="Ankit"
        value2="an"
      />
      <UserCardDetails
        title="User prefered language "
        key1="Language"
        value1="en"
      />
    </Card>
  );
};

export default page;
