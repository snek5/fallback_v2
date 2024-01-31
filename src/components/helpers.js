import seedrandom from "seedrandom";
import cryptoJs from "crypto-js";

const pickWinners = ({
    fileInput,
    perdanaWinners,
    nonPerdanaWinners,
    lineDelay,
    setRandomLine,
    setPickedLines,
    setFileHeaders,
    pickedLines,
    fileHeaders,
    rngSeed
}) => {
    if (!fileInput) {
        alert('Please choose a CSV file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.split('\n');
        const headers = lines[0].split('|').map((header) => header.trim());
        const data = lines.slice(1);
        
        setFileHeaders(headers);

        // const rngSeed = Date.now();
        console.log(`Seed Value: ${rngSeed}`);
        // const rngSeed = "testing"
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
            return;
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
                const certificate = randomLineData[headers.indexOf('ACCTNO')].trim();
                
                randomLineData.push(`W${i + 1}: ${certificate}`);
                setRandomLine((prevRandomLines) => [...prevRandomLines, `W${i + 1}: ${name}\n`]);
                setPickedLines((prevLines) => [...prevLines, randomLines[i]]);
            }, i * lineDelay * 1000);
        }        
        
        downloadSelectedLines(fileHeaders, pickedLines)
    };

    reader.readAsText(fileInput);
};

const downloadSelectedLines = (fileHeaders, pickedLines) => {
    const fileHeader = fileHeaders.join('|');
    const linesText = [fileHeader, ...pickedLines].join('\n');
    const blob = new Blob([linesText], { type: 'text/plain' });

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "selected_lines.csv";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

const hashFile = (fileInput, setHashedValue, setRngSeed) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
        const fileArrayBuffer = fileReader.result;
        const hashUint8Array = cryptoJs.SHA256(fileArrayBuffer);
        const hashedValueHex = hashUint8Array.toString(cryptoJs.enc.Hex);
        setHashedValue(hashedValueHex);
        // const randomBuffer = crypto.randomBytes(16);
        // const randomString = randomBuffer.toString('hex');
        const dateString = new Date().toISOString().slice(0, 19).replace(/[-T:]/g, '');;
        const rngSeed = dateString;
        setRngSeed(rngSeed);
        console.log(`RNG Seed: ${rngSeed}`);
        console.log(`Hashed File Value: ${hashedValueHex}`);
    };
    fileReader.readAsArrayBuffer(fileInput)
}

export { pickWinners, downloadSelectedLines, hashFile };
