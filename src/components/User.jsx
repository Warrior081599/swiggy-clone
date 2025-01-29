const User = (props) => {
  const { name } = props;
  return (
    <div>
      <p>User Functional Component: {name}</p>
    </div>
  );
};

export default User;
