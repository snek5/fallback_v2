import React from 'react';

const ResultList = ({ randomLine }) => {
  return (
    <>
      <ul className='grid grid-cols-3 gap-4'>
        {randomLine &&
          randomLine.map((line, index) => (
            <li
              key={index}
              className='block mb-2 text-md font-medium text-bibdpurple dark:text-white justify-center items-center text-left border border-bibdpurple shadow-xl rounded-xl p-1.5 bg-gray-50'
            >
              {line}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ResultList;
