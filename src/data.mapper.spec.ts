import { mapDataType } from "./data.mapper"

describe('Describe map data', () => {

    it('should return numeric if passed valid number', () => {
        const data = { header: 'zip', index: 0, value: '4567' }
        const result = mapDataType(data)
        expect(result).toBe(4567)
    })

    it('should return value as it is if passed is not a number', () => {
        const data = { header: 'zip', index: 0, value: 'anything' }
        const result = mapDataType(data)
        expect(result).toEqual('anything')
    })

})