import React from 'react';
import ResultList from './ResultLists';

const DrawWinners = ({ handleDraw, randomLine }) => {
  return (
    <>
      <button
      onClick={handleDraw}>
        Select Winner(s)
      </button>
      <ResultList 
      randomLine={randomLine} />
    </>
  );
};

export default DrawWinners;
