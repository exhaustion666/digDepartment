function freezeVehicle<T extends new (...args: any[]) => any>(constructor: T) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}

enum DocType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IntPassport = "Заграничный паспорт"
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

enum BodyType {
    Sedan = "Седан",
    Coupe = "Купе",
    SUV = "Внедорожник"
}

enum CarClass {
    Eco = "Эконом",
    Comfort = "Комфорт",
    Business = "Бизнес"
}

class Owner implements IOwner {
    constructor(
        private _surname: string,
        private _name: string,
        private _middlename: string,
        private _birthDate: Date,
        private _documentType: DocType,
        private _documentSeries: string,
        private _documentNumber: string
    ) {}

    get surname(): string { return this._surname; }
    set surname(value: string) { this._surname = value; }

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

    get middlename(): string { return this._middlename; }
    set middlename(value: string) { this._middlename = value; }

    get birthDate(): Date { return this._birthDate; }
    set birthDate(value: Date) { this._birthDate = value; }

    get documentType(): DocType { return this._documentType; }
    set documentType(value: DocType) { this._documentType = value; }

    get documentSeries(): string { return this._documentSeries; }
    set documentSeries(value: string) { this._documentSeries = value; }

    get documentNumber(): string { return this._documentNumber; }
    set documentNumber(value: string) { this._documentNumber = value; }

    @uppercaseMethod
    printOwnerInfo(): string {
        return `Фамилия: ${this._surname}\nИмя: ${this._name}\nОтчество: ${this._middlename}\nДата рождения: ${this._birthDate.toLocaleDateString()}\nТип документа: ${this._documentType}\nСерия документа: ${this._documentSeries}\nНомер документа: ${this._documentNumber}`;
    }
}

class Vehicle implements IVehicle {
    constructor(
        private _brand: string,
        private _model: string,
        private _year: number,
        private _VIN: string,
        private _registrationNumber: string,
        private _owner: IOwner
    ) {}

    get brand(): string { return this._brand; }
    set brand(value: string) { this._brand = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get year(): number { return this._year; }
    set year(value: number) { this._year = value; }

    get VIN(): string { return this._VIN; }
    set VIN(value: string) { this._VIN = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): IOwner { return this._owner; }
    set owner(value: IOwner) { this._owner = value; }

    printVehicleInfo(): string {
        return `Марка: ${this._brand}\nМодель: ${this._model}\nГод выпуска: ${this._year}\nVIN: ${this._VIN}\nРегистрационный номер: ${this._registrationNumber}`;
    }
}

@freezeVehicle
class Car extends Vehicle implements ICar {
    constructor(
        brand: string,
        model: string,
        year: number,
        VIN: string,
        registrationNumber: string,
        owner: IOwner,
        private _bodyType: BodyType,
        private _carClass: CarClass
    ) {
        super(brand, model, year, VIN, registrationNumber, owner);
    }

    get bodyType(): BodyType { return this._bodyType; }
    set bodyType(value: BodyType) { this._bodyType = value; }

    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    printVehicleInfo(): string {
        return super.printVehicleInfo() + `\nТип кузова: ${this._bodyType}\nКласс автомобиля: ${this._carClass}`;
    }
}

const owner = new Owner("Гослинг", "Райан", "Драйвович", new Date(1990, 1, 2), DocType.Passport, "1234", "567890");
const car = new Car("Chevy", "Malibu", 1973, "1H57K3R460826", "A123BC", owner, BodyType.Sedan, CarClass.Comfort);

console.log(owner.printOwnerInfo());
console.log(car.printVehicleInfo());

try {
    // @ts-ignore
    Car.prototype.newProperty = "Новое свойство";
    console.log("Новое свойство добавлено.");
} catch (e) {
    if (e instanceof Error) {
        console.log("Ошибка: невозможно добавить свойство.");
    }
}