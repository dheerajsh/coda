require('ts-node/register');
const parser = require('./src/records_parser');

const file = process.env.FILE
parser.parse(file)
.catch((error) => console.error('Error in parsing file', error))
