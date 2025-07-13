const UserCard = ({ name, email, age }) => {
  const handleClick = () => {
    console.log(`Clicked on ${name}`);
  };
  return (
    <div style={{border: '1px solid #ccc', padding: '1rem', margin: '1rem 0'}}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UserCard; 