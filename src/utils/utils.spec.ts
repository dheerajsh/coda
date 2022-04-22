import { isNumeric, isPhoneNumber, isEmail } from "./utils"

describe('Describe isNumeric method', () => {

    it('should return true if passed valid number', () => {
        const value = isNumeric('34567')
        expect(value).toBe(true)
    })

    it('should return false if passed invalid number', () => {
        const value = isNumeric('345v67')
        expect(value).toBe(false)
    })

    it('should return false if passed text', () => {
        const value = isNumeric('abcdef')
        expect(value).toBe(false)
    })

    it('should return false if passed NaN', () => {
        const value = isNumeric(NaN)
        expect(value).toBe(false)
    })
})

describe('Describe isPhoneNumber method', () => {

    it('should return true if passed valid phone number', () => {
        expect(isPhoneNumber('202-456-1414')).toBe(true)
        expect(isPhoneNumber('810 292 5565')).toBe(true)
        expect(isPhoneNumber('810.292.5565')).toBe(true)
    })

    it('should return false if passed invalid format', () => {
        expect(isPhoneNumber('8102-925-5655')).toBe(false)
    })

    it('should return false if passed text', () => {
        expect(isPhoneNumber('Thisisnotphobne5565')).toBe(false)
    })
})

    describe('Describe isEmail method', () => {

        it('should return true if passed valid email', () => {
            expect(isEmail('somebody_darkjey@darakjy.com')).toBe(true)
        })
    
        it('should return false if passed invalid format', () => {
            expect(isEmail('somebody@darakjy')).toBe(false)
        })
    
        it('should return false if passed text not email', () => {
            expect(isEmail('Thisisnotphobne5565')).toBe(false)
        })
})
