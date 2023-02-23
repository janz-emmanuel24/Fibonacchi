import { Fibonacci } from "../src/fibonacchi";
import { assert } from "chai";


/*  GROUP 1
 Jansuk Emmanuel Abbas
 Zainab Tegulwa
*/

describe('test the VALID return values of the Fibonacci method', () => {
    let fib;
    beforeEach(() => {
        fib = new Fibonacci();
    });
    it('should return 0', () => {
        assert.deepEqual(fib.fibonacci(0),[0]);
    });
    it('should return 0, 1', () => {
        assert.deepEqual(fib.fibonacci(1), [0, 1]);
    });
    it('should return 0, 1, 1', () => {
        assert.deepEqual(fib.fibonacci(2), [0, 1, 1]);
    });
    it('should return 0, 1, 1, 2', () => {
        assert.deepEqual(fib.fibonacci(3), [0, 1, 1, 2]);
    });
    it('should return 0, 1, 1, 2, 3', () => {
        assert.deepEqual(fib.fibonacci(4), [0, 1, 1, 2, 3]);
    });
    it('should return 0, 1, 1, 2, 3, 5', () => {
        assert.deepEqual(fib.fibonacci(5), [0, 1, 1, 2, 3, 5]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8', () => {
        assert.deepEqual(fib.fibonacci(6), [0, 1, 1, 2, 3, 5, 8]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8, 13', () => {
        assert.deepEqual(fib.fibonacci(7), [0, 1, 1, 2, 3, 5, 8, 13]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21', () => {
        assert.deepEqual(fib.fibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
        assert.deepEqual(fib.fibonacci(9), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55', () => {
        assert.deepEqual(fib.fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
});