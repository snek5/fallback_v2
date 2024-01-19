import seedrandom from "seedrandom";

const pickWinners = ({
    fileInput,
    perdanaWinners,
    nonPerdanaWinners,
    lineDelay,
    setRandomLine,
    setPickedLines,
    setFileHeaders,
    pickedLines,
    fileHeaders
}) => {
    if (!fileInput) {
        alert('Please choose a CSV file.');
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.split('\n');
        const headers = lines[0].split('|').map((header) => header.trim());
        const data = lines.slice(1);
        
        setFileHeaders(headers);

        const rngSeed = Date.now();
        const rng = seedrandom(rngSeed);

        const getRandomIndex = (max) => Math.floor(rng() * max);

        const perdanaIndex = headers.indexOf('PERDANA_FLAG');
        const chanceIndex = headers.indexOf('FINAL_CHANCES');

        if (perdanaIndex === -1) {
            alert('CSV file is missing the "PERDANA_FLAG" column.');
            return;
        }

        if (chanceIndex === -1) {
            alert('CSV file is missing the "FINAL_CHANCES" column.')
        }

        let cumulativeSum = 0;
        const cumulativeChances = data.map((line) => {
            const lineData = line.split('|');
            if (lineData.length > chanceIndex) {
                const chanceValue = parseFloat(lineData[chanceIndex].trim());
                if (!isNaN(chanceValue) && chanceValue >= 0) {
                    cumulativeSum += chanceValue;
                    return cumulativeSum;
                }
            }

            return 0;
        });

        const totalCumulativeSum = cumulativeSum;

        const randomLines = [];

        for (let i = 0; i < perdanaWinners; i++) {
            let randomIndex, randomLineData;
            const randomValue = rng() * totalCumulativeSum;
            randomIndex = cumulativeChances.findIndex(
                (cumulativeChances, index) => cumulativeChances >= randomValue && data[index].split('|')[perdanaIndex].trim() === 'Y'
            );
            randomLineData = data[randomIndex].split('|');
            randomLines.push(data[randomIndex]);
        }

        for (let i = 0; i < nonPerdanaWinners; i++) {
            let randomIndex, randomLineData;
            const randomValue = rng() * totalCumulativeSum;
            randomIndex = cumulativeChances.findIndex(
                (cumulativeChances, index) => cumulativeChances >= randomValue && data[index].split('|')[perdanaIndex].trim() === 'N'
            );
            randomLineData = data[randomIndex].split('|');
            randomLines.push(data[randomIndex]);
        }

        randomLines.sort(() => rng() - 0.5);

        for (let i = 0; i < randomLines.length; i++) {
            setTimeout(() => {
              const randomLineData = randomLines[i].split('|');
              const name = randomLineData[headers.indexOf('ACNAME')].trim();
              const certificate = randomLineData[headers.indexOf('ACCTNO_RAW')].trim();
      
              setRandomLine((prevRandomLine) => `${prevRandomLine}Certificate: ${certificate}\n`);
              setPickedLines((prevLines) => [...prevLines, randomLines[i]]);
            }, i * lineDelay * 1000);
          }        
        
        downloadSelectedLines(fileHeaders, pickedLines)
    };

    reader.readAsText(fileInput);
 
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, pickedLines.length * lineDelay * 1000)
    // })
};

const downloadSelectedLines = (fileHeaders, pickedLines) => {
    const fileHeader = fileHeaders.join('|')
    console.log(fileHeader)
    const linesText = [fileHeader,...pickedLines].join('\n');
    const blob = new Blob([linesText], { type: 'text/plain' });
  
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "selected_lines.csv";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  export { pickWinners, downloadSelectedLines };