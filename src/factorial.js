export class Factorial {
    getFactorialOf(number) {
        let testNumber = number;

        if(testNumber == 1) {
            return testNumber
        }
        
        for(let i = number - 1; i > 0; i--) {
            testNumber = testNumber * i;
        }

        return testNumber
    }
}