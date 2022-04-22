# CSV Parser App
Command Line Application to Find the records from CSV File and generatted formatted output into single file for each record.

Application expect to provide all the available rcords in a CSV file.

## Requirements
1. node version >= 8.9.1
2. npm version preferbally latest.

## Problem statment

Write a command line application that fits the following requirements.
Acceptance Criteria:
1. When run in a terminal, the app takes a records.csv file path as input.
2. File represent a record of data, each record is separated by a newline
3. Each recor consist of an ordered list of "field" values, and each field is separated from the next by a comma.
4. The first line consist of a header row
5. For each record , an output file should be generated with a formatted output of the record .
For each field , the output should include the field name, value.
6. Should be formatting either in JSON or XML Format

## Solution
This App solves the above problem using Javascript and Typescript on Node execution environment.

## Execution Steps
1. Clone the repository or download on your local machine.
2. Run command `npm run clean`
3. Run command `npm run build`
4. Run script `FILE=records.csv node index.js`

### Alternatively you can install the command as global like below.

```
npm install -g
```

then you can use it like:

```
FILE=records.csv coda
```
## To Executed unit test cases run command
```
npm test
```
