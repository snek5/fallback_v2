import React from 'react';

const ResultList = ({ randomLine }) => {
  return (
    <ul>
      {randomLine &&
        randomLine.split('\n').map((line, index) => (
          <li key={index}>
            {line}
          </li>
        ))}
    </ul>
  );
};

export default ResultList;