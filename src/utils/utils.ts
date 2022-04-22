
import { PhoneNumberUtil } from 'google-libphonenumber'

/**
 * Check whether the given value is a valid numeric or not.
 * @param n number in text format
 * @returns true if input is a valid number
 */
export function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  /**
   * Check if the given value is a phone number.
   * 
   * @param input 
   * @returns true if valid pbone otherwise false.
   */
export function isPhoneNumber(input: string): boolean{
    const phoneUtil = PhoneNumberUtil.getInstance()

    return phoneUtil.isPossibleNumberString(input, 'US')
    
}

/**
 * Check if the text is an email or not.
 * @param mail 
 * @returns true if valid email otherwise false
 */
export function isEmail(mail: string): boolean {

    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.test(mail)) {
        return true
    }
    return false
}
