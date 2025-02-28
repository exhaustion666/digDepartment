declare const Average: (numbers: number[]) => number;
declare const average: number;
declare const Count: (matrix: number[][], min: number, max: number) => number;
declare const count: number;
declare const Tuple: [string, string, number];
declare const showTuple: (tuple: [string, string, number]) => string;
declare enum OilType {
    Canola = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435",
    Sunflower = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435",
    Olive = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const somePet: Pet;
declare const someCat: Pet;
declare const someDog: Pet;
interface Oil {
    type: OilType;
    liter: number;
    price: number;
}
declare const oilProduct: Oil;
declare const jsonObject: string;
declare const objParsed: Oil;
declare let partObject: OilType;
