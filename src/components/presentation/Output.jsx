import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


const Output = ({ results }) => {
  
  return (
    <div>
      {
        <ReactJson src = {results}  />
      }
    </div>
  );
};

Output.propTypes = {
  results: PropTypes.array
};

export default Output;

