declare enum DocType {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
    IDCard = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438"
}
declare enum BodyType {
    Sedan = "\u0421\u0435\u0434\u0430\u043D",
    Coupe = "\u041A\u0443\u043F\u0435",
    Hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
    SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A"
}
declare enum CarClass {
    Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
    Business = "\u0411\u0438\u0437\u043D\u0435\u0441",
    Premium = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
}
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: DocType;
    documentSeries: string;
    documentNumber: string;
    printInfo(): void;
}
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printInfo(): void;
}
declare class VehicleOwner implements Owner {
    private _lastName;
    private _firstName;
    private _middleName;
    private _birthDate;
    private _docType;
    private _documentSeries;
    private _documentNumber;
    constructor(_lastName: string, _firstName: string, _middleName: string, _birthDate: Date, _docType: DocType, _documentSeries: string, _documentNumber: string);
    get lastName(): string;
    get firstName(): string;
    get middleName(): string;
    get birthDate(): Date;
    get docType(): DocType;
    get documentSeries(): string;
    get documentNumber(): string;
    printInfo(): void;
}
declare class VehicleImpl implements Vehicle {
    private _brand;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    constructor(_brand: string, _model: string, _year: number, _vin: string, _registrationNumber: string, _owner: Owner);
    get brand(): string;
    get model(): string;
    get year(): number;
    get vin(): string;
    get registrationNumber(): string;
    get owner(): Owner;
    printInfo(): void;
}
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}
declare class CarImpl extends VehicleImpl implements Car {
    private _bodyType;
    private _carClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, _bodyType: BodyType, _carClass: CarClass);
    get bodyType(): BodyType;
    get carClass(): CarClass;
    printInfo(): void;
}
interface Motorbike extends Vehicle {
    frameType: string;
    isSports: boolean;
}
declare class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private _frameType;
    private _isSports;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, _frameType: string, _isSports: boolean);
    get frameType(): string;
    get isSports(): boolean;
    printInfo(): void;
}
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}
declare class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];
    constructor(creationDate: Date);
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
}
declare const owner1: VehicleOwner;
declare const car1: CarImpl;
declare const motorbike1: MotorbikeImpl;
declare const storage: VehicleStorageImpl<Vehicle>;
