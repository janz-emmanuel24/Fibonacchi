export class Factorial {
    getFactorialOf(number) {
        let testNumber = number;
        for(let i = number - 1; i > 0; i--) {
            testNumber = testNumber * i;
        }

        return testNumber
    }
}