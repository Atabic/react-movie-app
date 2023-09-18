import React from 'react';

const ApiErrorDisplay = ({ message }) => {
  return (
    <div>
      <h1>API Error</h1>
      <p>Error Message: {message}</p>
    </div>
  );
};

export default ApiErrorDisplay;
