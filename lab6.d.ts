declare function LockPrototype(target: Function): void;
declare function UpperCaseReturn(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Automobile {
    make: string;
    model: string;
    constructor(make: string, model: string);
    getInfo(): string;
}
declare const car: Automobile;
