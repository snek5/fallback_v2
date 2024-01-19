import React from 'react';

const ResultList = ({ randomLine }) => {
  return (
    <ul>
      {randomLine &&
        randomLine.split('\n').map((line, index) => (
          <li 
          key={index}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center items-center text-center'
          >
            {line}
          </li>
        ))}
    </ul>
  );
};

export default ResultList;