import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url }) => (
  <div>
    <span>{method} - {url}</span>
    
  </div>
);


HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;