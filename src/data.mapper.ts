import { isNumeric, isPhoneNumber, isEmail } from "./utils/utils"
/**
 * Format the value to correct data type, ie. number
 * @param args JSON Object contains header, index and value
 * @returns New json object which has fields with numeric values only
 */
 export function mapDataType(args: { header: string; index: number; value: any }): any {
    if(isNumeric(args.value)) {
        return parseInt(args.value)
    }
    if(isPhoneNumber(args.value)) {
        return args.value.toString()
    }
    if(isEmail(args.value)) {
        return args.value.toString()
    }
    
    return args.value
}
