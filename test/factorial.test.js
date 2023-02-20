import { assert } from "chai";
import { Factorial } from "../src/factorial";

describe('Testing For Factorials', () => {
    it('Testing the factorial of 2', () => {
        let factorial = new Factorial()
        assert.equal(factorial.getFactorialOf(2), 2)
    })

    it('Testing the factorial of 1', () => {
        let factorial = new Factorial()
        assert.equal(factorial.getFactorialOf(1), 1)
    })

    it('Testing the factorial of 4', () => {
        let factorial = new Factorial()
        assert.equal(factorial.getFactorialOf(4), 24)
    })
})