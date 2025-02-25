function LockPrototype(target: Function) {
    Object.freeze(target.prototype);
}

function UpperCaseReturn(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };

    return descriptor;
}

@LockPrototype
class Automobile {
    constructor(public make: string, public model: string) {}

    @UpperCaseReturn
    getInfo(): string {
        return `Марка: ${this.make}, Модель: ${this.model}`;
    }
}

const car = new Automobile("Toyota", "Camry");
(car as any).year = 2020;
console.log(car.year);

console.log(car.getInfo());
