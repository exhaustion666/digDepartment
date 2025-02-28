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

interface IMotorbike extends IVehicle {
    frameType: string;
    isSport: boolean;
    getFrameInfo: () => string;
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

class Motorbike extends Vehicle implements IMotorbike {
    constructor(
        brand: string,
        model: string,
        year: number,
        VIN: string,
        registrationNumber: string,
        owner: IOwner,
        private _frameType: string,
        private _isSport: boolean
    ) {
        super(brand, model, year, VIN, registrationNumber, owner);
    }

    get frameType(): string { return this._frameType; }
    set frameType(value: string) { this._frameType = value; }

    get isSport(): boolean { return this._isSport; }
    set isSport(value: boolean) { this._isSport = value; }

    printVehicleInfo(): string {
        return super.printVehicleInfo() + `\nТип рамы: ${this._frameType}\nДля спорта: ${this._isSport}`;
    }

    getFrameInfo(): string {
        return JSON.stringify({ frameType: this._frameType, isSport: this._isSport }, null, 2);
    }
}

interface IVehicleStorage<T extends IVehicle> {
    created: Date;
    data: T[];
    getAll(): T[];
    save(data: T): void;
    remove(index: number): void;
    sortByOwnerSurname(): void;
    findByOwnerDocumentPrefix(prefix: string): T[];
}

class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    private _created: Date;
    private _data: T[];

    constructor() {
        this._created = new Date();
        this._data = [];
    }

    get created(): Date { return this._created; }
    get data(): T[] { return this._data; }

    getAll(): T[] { return this._data; }

    save(data: T): void { this._data.push(data); }

    remove(index: number): void { this._data.splice(index, 1); }

    sortByOwnerSurname(): void {
        this._data.sort((a, b) => a.owner.surname.localeCompare(b.owner.surname));
    }

    findByOwnerDocumentPrefix(prefix: string): T[] {
        return this._data.filter(vehicle => vehicle.owner.documentSeries.startsWith(prefix));
    }

    printOwners(): void {
        console.log("\n👤 Список владельцев транспортных средств:");
        this._data.forEach(vehicle => {
            console.log(vehicle.owner.printOwnerInfo());
        });
    }
}

const owner1 = new Owner("Гослинг", "Райан", "Драйвович", new Date(1990, 1, 2), DocType.Passport, "1234", "567890");
const owner2 = new Owner("Кидов", "Максим", "Петрович", new Date(2005, 5, 10), DocType.DriverLicense, "1337", "123456");
const owner3 = new Owner("Ицков", "Дмитрий", "Олегович", new Date(1997, 2, 4), DocType.IntPassport, "1234", "654321");

const car1 = new Car("LADA", "Niva", 2005, "1A2B3C4D5E6F7G8H9", "G789HI", owner3, BodyType.SUV, CarClass.Eco);
const car2 = new Car("Chevy", "Malibu", 1973, "1H57K3R460826", "A123BC", owner2, BodyType.Sedan, CarClass.Comfort);
const motorbike1 = new Motorbike("Kawasaki", "H2R", 2025, "WAUZZZFY2M2061887", "D456EF", owner1, "Сталь", true);

const vehicleStorage = new VehicleStorage<IVehicle>();
vehicleStorage.save(car1);
vehicleStorage.save(car2);
vehicleStorage.save(motorbike1);

console.log("Данные до сортировки:");
vehicleStorage.printOwners();
vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));

vehicleStorage.sortByOwnerSurname();
console.log("\nДанные после сортировки по фамилии владельца:");
vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));

const foundVehicles = vehicleStorage.findByOwnerDocumentPrefix("1234");
console.log("\nНайденные ТС по серии документа '1234':");
foundVehicles.forEach(vehicle => console.log(vehicle.printVehicleInfo()));

console.log("\nИнформация о мотоцикле:");
console.log(motorbike1.getFrameInfo());