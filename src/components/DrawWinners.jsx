import React from 'react';
import ResultList from './ResultLists';

const DrawWinners = ({ handleDraw, randomLine }) => {
  return (
    <>
      <button
      onClick={handleDraw}
      className='mt-4 mb-2 bg-gray-50 border border-bibdpurple text-gray-900 text-sm rounded-lg focus:ring-bibdpurple focus:border-bibdpurple block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        Select Winner(s)
      </button>
      <ResultList 
      randomLine={randomLine} />
    </>
  );
};

export default DrawWinners;
