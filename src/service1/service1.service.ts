import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {

    sumNumbers () : number {
        let sum = 0
        for (let i = 1; i <= 10; i++) {
            sum += i
        } 
        return sum
    }

    sumPairNumbers () : number {
        let sum = 0
        for (let i = 1; i<= 10; i++) {
            if (i % 2 === 0) {
                sum += i
            }
        }
        return sum
    }

    sumOddNumbers () : number {
        let sum = 0 
        for (let i = 1; i <= 10; i++) {
            if (i % 2 !== 0) {
                sum += i
            }
        }
        return sum
    }
}
