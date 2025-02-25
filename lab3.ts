enum DocType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "Удостоверение личности"
}

enum BodyType {
    Sedan = "Седан",
    Coupe = "Купе",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник"
}

enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум"
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

class VehicleOwner implements Owner {
    constructor(
        private _lastName: string,
        private _firstName: string,
        private _middleName: string,
        private _birthDate: Date,
        private _docType: DocType,
        private _documentSeries: string,
        private _documentNumber: string
    ) {}

    get lastName() {
        return this._lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get middleName() {
        return this._middleName;
    }

    get birthDate() {
        return this._birthDate;
    }

    get docType() {
        return this._docType;
    }

    get documentSeries() {
        return this._documentSeries;
    }

    get documentNumber() {
        return this._documentNumber;
    }

    printInfo(): void {
        console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._docType}`);
        console.log(`Серия: ${this._documentSeries}`);
        console.log(`Номер: ${this._documentNumber}`);
    }
}

// Класс, реализующий интерфейс Транспортное средство
class VehicleImpl implements Vehicle {
    constructor(
        private _brand: string,
        private _model: string,
        private _year: number,
        private _vin: string,
        private _registrationNumber: string,
        private _owner: Owner
    ) {}

    get brand() {
        return this._brand;
    }

    get model() {
        return this._model;
    }

    get year() {
        return this._year;
    }

    get vin() {
        return this._vin;
    }

    get registrationNumber() {
        return this._registrationNumber;
    }

    get owner() {
        return this._owner;
    }

    printInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        this._owner.printInfo(); // Выводим информацию о владельце
    }
}

// Интерфейс Автомобиль
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

// Класс, реализующий интерфейс Автомобиль
class CarImpl extends VehicleImpl implements Car {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        private _bodyType: BodyType,
        private _carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    get bodyType() {
        return this._bodyType;
    }

    get carClass() {
        return this._carClass;
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}

// Интерфейс Мотоцикл
interface Motorbike extends Vehicle {
    frameType: string;
    isSports: boolean;
}

// Класс, реализующий интерфейс Мотоцикл
class MotorbikeImpl extends VehicleImpl implements Motorbike {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        private _frameType: string,
        private _isSports: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    get frameType() {
        return this._frameType;
    }

    get isSports() {
        return this._isSports;
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isSports}`);
    }
}

// Интерфейс Хранилище
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[]; // Метод для получения всех транспортных средств
}

// Класс, реализующий интерфейс Хранилище
class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    public vehicles: T[] = [];
    constructor(public creationDate: Date) {}
    getAllVehicles(): T[] {
        return this.vehicles;
    }
    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}

// Пример использования
const owner1 = new VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), DocType.Passport, "1234", "567890");
const car1 = new CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, BodyType.Sedan, CarClass.Business);
const motorbike1 = new MotorbikeImpl("Yamaha", "YZF-R3", 2021, "JYARJ23E0JA000001", "B456CD", owner1, "Спортивная", true);

const storage = new VehicleStorageImpl<Vehicle>(new Date());
storage.addVehicle(car1);
storage.addVehicle(motorbike1);

console.log("Сведения о транспортных средствах:");
storage.getAllVehicles().forEach(vehicle => {
    vehicle.printInfo();
    console.log("------------------------------");
});
