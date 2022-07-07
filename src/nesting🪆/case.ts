import {dog} from './pkgC';

declare module './pkgC' {
    interface Dog {
        eat: string;
    }
}

console.log(dog.name); // a