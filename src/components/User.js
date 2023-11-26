import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  const { name, location, email } = props;
  return (
    <div className="user-card">
      <h1>count={count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>count2={count2}</h1>
      <h1>Name:{name}</h1>
      <h2>Email:{email}</h2>
      <h3>Current location:{location}</h3>
    </div>
  );
};

export default User;
