import { getUser } from "@/lib/getUser";
import React from "react";
type UserDetailsTypes = {
  params: {
    email: string;
  };
};
const page = async ({ params: { email } }: UserDetailsTypes) => {
  const user = await getUser(email);
  return <div style={{ color: "#fff" }}>page</div>;
};

export default page;
