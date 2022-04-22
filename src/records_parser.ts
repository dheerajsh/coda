import { createReadStream, writeFile } from "fs"
import csvParser from "csv-parser"
import { mapDataType } from "./data.mapper"

/**
 * Accept the file contains records and format and save each record in separate file.
 * File represent a record of data, each record is separated by a newline
 * Each recor consist of an ordered list of "field" values, and each field is separated from the next by a comma.
 * The first line consist of a header row
 * For each record , an output file should be generated with a formatted output of the record 
 * 
 * @param file Path of the CSV file contains records
 */
export async function parse(file: string): Promise<void> {

    // read CSV file and store each record in a separate file
    try {
        let fileNum = 1;
        createReadStream(file)
            .pipe(csvParser({
                mapValues: mapDataType //map to corrosponing Datatype, ie. number, phone etc
            }))
            .on('data', record => {
                const formattedRecord = JSON.stringify(record, null, '\t')
                // create and write to a new file for each record, using counter to distinguish the file name.
                const fileName = `out/record_${fileNum++}.json`
                writeFile(fileName, formattedRecord, 'utf8', (error) => {
                    if (error) {
                        console.error(`Error while creating record file for record ${record}`, error)
                    }
                })
            }
            )
            .on('end', () => console.log('Records generated.'))
    } catch (error) {
        throw error
    }
}
