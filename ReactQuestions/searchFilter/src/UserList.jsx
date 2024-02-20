/* eslint-disable react/prop-types */
const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-main">
      {users.map((user) => (
        <div key={user.id} className="grid-child">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
