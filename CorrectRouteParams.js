import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  if (!userId) {
    return <div>No User Selected</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default User;