const User = (props) => {
  const { name, location } = props;
  return (
    <div className="user-card">
      <h4>Developer Details</h4>
      <h4>Name: {name}</h4>
      <h5>Location: {location}</h5>
      <h5>Contact: Vinaysai4545@gmail.com</h5>
    </div>
  );
};
export default User;
