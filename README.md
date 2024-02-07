# Aspirasi 6 Draw System

This project is a frontend application developed using Vite and React to create a draw system for the "Aspirasi 6" campaign managed by BIBD Bank. The draw system allows for the selection of winners based on specified criteria and parameters.

## Features

- **Upload CSV**: Users can upload a CSV file containing participant data.
- **Hash Value Generation**: Upon file submission, the system generates a hash value for the uploaded file.
- **Randomizer**: Users can input a random number generator (RNG) value to run the randomizer.
- **Staff Toggle**: Users can toggle between staff and public draws.
- **Public Draw Parameters**:
  - Number of Perdana Customers
  - Number of Mass Market Customers
  - Delay Input
- **Staff Draw Parameters**:
  - Number of Staff Winners
  - Delay Input
- **Draw Execution**: The system executes the draw based on the specified parameters, selecting winners accordingly.
- **Download Selected Lines**: Winners' details can be downloaded as a CSV file, including the RNG seed value and file hash.

## Usage

To run this application and showcase basic frontend development skills:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Run the application using `npm run dev` or `yarn dev`.
5. Access the application in your browser.

## How to Use

1. Upload a CSV file containing participant data.
2. Optionally, input an RNG value for the randomizer.
3. Toggle between staff and public draws.
4. Provide relevant draw parameters based on the selected draw type.
5. Submit the form to execute the draw.
6. View the selected winners and download their details as a CSV file.

## Auditable Draw System Guidelines:

1. **Data Integrity Verification**:
   - Before initiating the draw, ensure the integrity of the participant data by verifying the CSV file's format, completeness, and correctness.

2. **Randomization Process**:
   - Use a secure and unbiased random number generator (RNG) algorithm to ensure fairness in the selection process.
   - Document the RNG seed value used for each draw session to facilitate audit trails.

3. **Draw Execution**:
   - Document the draw execution process, including the selection criteria, parameters, and any specific rules applied (e.g., staff vs. public draw).
   - Log all draw actions and outcomes, including the selected winners and any relevant details.

4. **Participant Eligibility**:
   - Validate participant eligibility criteria and ensure that only eligible participants are included in the draw.
   - Maintain clear documentation regarding the eligibility criteria and how they are applied.

5. **Transparency**:
   - Provide visibility into the draw process by displaying relevant information such as the number of participants, winners selected, and any filtering criteria applied.
   - Enable stakeholders to review the draw results and verify the integrity of the selection process.

6. **Hash Value and File Integrity**:
   - Generate a hash value for the uploaded CSV file to ensure its integrity and authenticity.
   - Document the generated hash value and include it in the draw results for verification purposes.

7. **Downloadable Results**:
   - Enable users to download the draw results, including participant details and selection outcomes, in a structured format (e.g., CSV).
   - Include metadata such as the RNG seed value and file hash in the downloadable results for auditability.
