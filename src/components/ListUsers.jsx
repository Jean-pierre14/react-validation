const ListUsers = (props) => {
  return (
    <>
      <div className="list">
        {props.users.map(({ _id, username, email }) => {
          return (
            <div className="item" key={`${_id}`}>
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
