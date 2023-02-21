/*  GROUP 1
 Jansuk Emmanuel Abbas
 Zainab Tegulwa
*/

export class Factorial {
    getFactorialOf(number) {
        let testNumber = number;

        if(testNumber == 1 || testNumber == 0) {
            return 1
        }
        
        for(let i = number - 1; i > 0; i--) {
            testNumber = testNumber * i;
        }

        return testNumber
    }
}