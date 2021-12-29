import React from 'react';

const Error = (props) => {

  return props.error? <div className="error-message">
    <h3>Cannot Connect to GitHub API</h3> 
    <p>{props.error}</p>
  </div>:'';
};

export default Error;