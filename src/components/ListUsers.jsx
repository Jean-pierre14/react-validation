import React from "react";

const ListUsers = (props) => {
  return (
    <>
      <div className="list">
        {props.users.map(({ id, username, email }) => {
          return (
            <div className="item" id={id}>
              <span>{username}</span>
              <span className="date">{email}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListUsers;
