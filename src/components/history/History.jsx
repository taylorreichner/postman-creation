import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';


const History = ({ searches }) => {

  const history = searches.map((item, index) => (
    <li key={index}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <div>
      <h1>History</h1>
      <ul>
        {history}
      </ul>
    </div>
  );

};

History.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default History;