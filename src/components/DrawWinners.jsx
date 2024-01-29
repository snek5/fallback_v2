import React from 'react';
import Logo from '../assets/aspirasi_6_logo.png'
import ResultList from './ResultLists';

const DrawWinners = ({ handleDraw, randomLine }) => {
  return (
    <>
      <img
      src={Logo}
      onClick={handleDraw}
      className='mt-4 mb-2 cursor-pointer'
      />
      <ResultList 
      randomLine={randomLine} />
    </>
  );
};

export default DrawWinners;
