import React from "react";

type UserDetailProps = {
  title: string;
  key1: string;
  key2?: string;
  value1?: string;
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
    <div className="card-details">
      <h3>{title}</h3>
      <ul>
        <li>
          <b> {key1}</b> : {value1}
        </li>
        {key2 && (
          <li>
            <b> {key2}</b> : {value2}
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserCardDetails;
