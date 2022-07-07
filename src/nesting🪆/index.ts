import {dog} from './pkgC';

declare module './pkgC' {
    interface Dog {
        age: number;
    }
}

console.log(dog); // a

