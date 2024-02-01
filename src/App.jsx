import React, { useState } from 'react'
import Headers from './components/Headers'
import FileInput from './components/FileInput'
import WinnersInput from './components/WinnersInput'
import DelayInput from './components/DelayInput'
import SubmitButton from './components/SubmitButton'
import DrawWinners from './components/DrawWinners'
import KeydownComponent from './components/KeyDownComponent'
import SeedInput from './components/SeedInput'
import { pickWinners, downloadSelectedLines, pickStaff, hashFile } from './components/helpers'
import './App.css'

function App() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileInput, setFileInput] = useState(null);
  const [perdanaWinners, setPerdanaWinners] = useState(0);
  const [nonPerdanaWinners, setNonPerdanaWinners] = useState(0);
  const [staffWinners, setStaffWinners] = useState(0);
  const [lineDelay, setLineDelay] = useState(0);
  const [randomLine, setRandomLine] = useState('');
  const [pickedLines, setPickedLines] = useState([]);
  const [fileHeaders, setFileHeaders] = useState(null);
  const [hashedValue, setHashedValue] = useState("");
  const [rngSeed, setRngSeed] = useState("");
  const [staffDraw, setStaffDraw] = useState(false);
  
  const handleFormSubmitted = () => {
    setFormSubmitted(true)
  };

  const handleFileChange = (file) => {
    setFileInput(file);
    setFileUploaded(true);
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

  const handleSeedChange = (value) => {
    setRngSeed(value);
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

  const handlePickStaff = () => {
    pickStaff({
      fileInput,
      staffWinners,
      lineDelay,
      setRandomLine,
      setPickedLines,
      setFileHeaders,
      rngSeed
    })
  }

  const handleDownload = () => {
    downloadSelectedLines(
      fileHeaders,
      pickedLines,
      rngSeed,
      hashedValue
    )
  }

  const handleHashing = (file) => {
    hashFile(file, setHashedValue, setRngSeed)
  }

  const handleStaffDraw = () => {
    setStaffDraw(!staffDraw)
  }

  const handleStaffWinnerChange = (value) => {
    setStaffWinners(parseInt(value));
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
            handleHashing={handleHashing}
            />
            <SeedInput
            rngSeed={rngSeed}
            value = {rngSeed}
            onChange={handleSeedChange}
            />
          <label>
          <input
            type="checkbox"
            checked={staffDraw}
            onChange={handleStaffDraw}
          />
             Staff Draw
          </label>
            { !staffDraw ?
            (<>
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
            </>)
            :
            (
            <>  
            <WinnersInput
            label="Number of Staff Winners:"
            value={staffWinners}
            onChange={handleStaffWinnerChange}
            />
            <DelayInput
            value={lineDelay}
            onChange={handleLineDelayChange}
            />
            <SubmitButton
            handleFormSubmitted={handleFormSubmitted}
            fileInput={fileInput}
            staffWinners={staffWinners}
            lineDelay={lineDelay}
            />
            </>
            )
            }
          </>
        )}
        { isFormSubmitted && (
          <>
            <DrawWinners
            handleDraw={ !staffDraw ? handlePickWinners : handlePickStaff} 
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
