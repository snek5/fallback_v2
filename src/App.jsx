import React, { useState } from 'react'
import Headers from './components/Headers'
import FileInput from './components/FileInput'
import WinnersInput from './components/WinnersInput'
import DelayInput from './components/DelayInput'
import SubmitButton from './components/SubmitButton'
import DrawWinners from './components/DrawWinners'
import KeydownComponent from './components/KeyDownComponent'
import { pickWinners, downloadSelectedLines, hashFile } from './components/helpers'
import './App.css'

function App() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileInput, setFileInput] = useState(null);
  const [perdanaWinners, setPerdanaWinners] = useState(0);
  const [nonPerdanaWinners, setNonPerdanaWinners] = useState(0);
  const [lineDelay, setLineDelay] = useState(0);
  const [randomLine, setRandomLine] = useState('');
  const [pickedLines, setPickedLines] = useState([]);
  const [fileHeaders, setFileHeaders] = useState(null);
  const [hashedValue, setHashedValue] = useState("");
  const [rngSeed, setRngSeed]=useState("");


  const handleFormSubmitted = () => {
    setFormSubmitted(true)
  };

  const handleFileChange = (file) => {
    setFileInput(file);
    setFileUploaded(true);
    hashFile(file, setHashedValue, setRngSeed);
  };

  const handlePerdanaWinnersChange = (value) => {
    setPerdanaWinners(parseInt(value));
  };

  const handleNonPerdanaWinnersChange = (value) => {
    setNonPerdanaWinners(parseInt(value));
  };

  const handleLineDelayChange = (value) => {
    setLineDelay(parseInt(value));
  }


  const handlePickWinners = () => {
    pickWinners({
      fileInput,
      perdanaWinners,
      nonPerdanaWinners,
      lineDelay,
      setRandomLine,
      setPickedLines,
      setFileHeaders,
      rngSeed
    });
  };

  const handleDownload = () => {
    downloadSelectedLines(
      fileHeaders,
      pickedLines,
      rngSeed,
      hashedValue
    )
  }

  return (
    <>
      <div
      className='mt-4 px-4 mx-auto flex flex-col justify-center items-center'>
        { !isFormSubmitted && (
          <>
            <Headers />
            <FileInput 
            onFileChange={handleFileChange} 
            fileUploaded={fileUploaded}
            hashedValue={hashedValue}
            rngSeed={rngSeed}
            hashFile={hashFile} 
            />
            <WinnersInput
            label="Number of Perdana Winners:"
            value={perdanaWinners}
            onChange={handlePerdanaWinnersChange}
            />
            <WinnersInput
            label="Number of Mass Market Winners:"
            value={nonPerdanaWinners}
            onChange={handleNonPerdanaWinnersChange}
            />
            <DelayInput
            value={lineDelay}
            onChange={handleLineDelayChange}
            />
            <SubmitButton
            handleFormSubmitted={handleFormSubmitted}
            fileInput={fileInput}
            perdanaWinners={perdanaWinners}
            nonPerdanaWinners={nonPerdanaWinners}
            lineDelay={lineDelay}
            />
          </>
        )}
        { isFormSubmitted && (
          <>
            <DrawWinners
            handleDraw={handlePickWinners} 
            randomLine={randomLine}
            />
            <KeydownComponent
            downloadLines={handleDownload}
            />
          </>
        )}
      </div>
    </>
  )
}

export default App
