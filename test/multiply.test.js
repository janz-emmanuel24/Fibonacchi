import { assert } from "chai";
import { multiply } from "../src/multiply";

describe('Testing the multiply function', () =>{
    it('Tests the return value of multiplying 3,5', () => {
        assert.equal(multiply(3,5), 15, 'Not right output')
    })

    it('Tests the return value of multiplying 2,2', () => {
        assert.equal(multiply(2,2), 4, 'The output of multiplying 2 * 2 is 4')
    })

    it('Tests the return value of multiplying 3,3', () => {
        assert.equal(multiply(3,3), 9, 'The output of multiplying 3 * 3 is wrong')
    })

    it('Tests the return value of multiplying 23,45', () => {
        assert.equal(multiply(23,45), 23 * 45, 'The output of multiplying 23 * 45 is wrong')
    })
})
