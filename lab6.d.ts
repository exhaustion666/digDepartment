declare function freezeVehicle<T extends new (...args: any[]) => any>(constructor: T): void;
declare function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare enum DocType {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
    IntPassport = "\u0417\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442"
}
interface IOwner {
    surname: string;
    name: string;
    middlename: string;
    birthDate: Date;
    documentType: DocType;
    documentSeries: string;
    documentNumber: string;
    printOwnerInfo: () => string;
}
interface IVehicle {
    brand: string;
    model: string;
    year: number;
    VIN: string;
    registrationNumber: string;
    owner: IOwner;
    printVehicleInfo: () => string;
}
interface ICar extends IVehicle {
    bodyType: BodyType;
    carClass: CarClass;
}
declare enum BodyType {
    Sedan = "\u0421\u0435\u0434\u0430\u043D",
    Coupe = "\u041A\u0443\u043F\u0435",
    SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A"
}
declare enum CarClass {
    Eco = "\u042D\u043A\u043E\u043D\u043E\u043C",
    Comfort = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442",
    Business = "\u0411\u0438\u0437\u043D\u0435\u0441"
}
declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _middlename;
    private _birthDate;
    private _documentType;
    private _documentSeries;
    private _documentNumber;
    constructor(_surname: string, _name: string, _middlename: string, _birthDate: Date, _documentType: DocType, _documentSeries: string, _documentNumber: string);
    get surname(): string;
    set surname(value: string);
    get name(): string;
    set name(value: string);
    get middlename(): string;
    set middlename(value: string);
    get birthDate(): Date;
    set birthDate(value: Date);
    get documentType(): DocType;
    set documentType(value: DocType);
    get documentSeries(): string;
    set documentSeries(value: string);
    get documentNumber(): string;
    set documentNumber(value: string);
    printOwnerInfo(): string;
}
declare class Vehicle implements IVehicle {
    private _brand;
    private _model;
    private _year;
    private _VIN;
    private _registrationNumber;
    private _owner;
    constructor(_brand: string, _model: string, _year: number, _VIN: string, _registrationNumber: string, _owner: IOwner);
    get brand(): string;
    set brand(value: string);
    get model(): string;
    set model(value: string);
    get year(): number;
    set year(value: number);
    get VIN(): string;
    set VIN(value: string);
    get registrationNumber(): string;
    set registrationNumber(value: string);
    get owner(): IOwner;
    set owner(value: IOwner);
    printVehicleInfo(): string;
}
declare class Car extends Vehicle implements ICar {
    private _bodyType;
    private _carClass;
    constructor(brand: string, model: string, year: number, VIN: string, registrationNumber: string, owner: IOwner, _bodyType: BodyType, _carClass: CarClass);
    get bodyType(): BodyType;
    set bodyType(value: BodyType);
    get carClass(): CarClass;
    set carClass(value: CarClass);
    printVehicleInfo(): string;
}
declare const owner: Owner;
declare const car: Car;
