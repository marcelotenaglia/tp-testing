import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {

    calculateSquareArea(side : number) : number {

        return side * side

    }

    calculateTriangleArea(base : number, height : number) : number {

        return 0.5 * base * height 

    }

    calculateRectangleArea (length : number, width : number) : number {

        return length * width

    }

}
