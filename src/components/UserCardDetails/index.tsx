import React from "react";
type UserDetailProps = {
  title: string;
  key1: string;
  key2?: string;
  value1: string;
  value2?: string;
};
const UserCardDetails = ({
  title,
  key1,
  key2,
  value1,
  value2,
}: UserDetailProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <li>
          {key1}:{value1}
        </li>
        {key2 && (
          <li>
            {key2}:{value2}
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserCardDetails;
