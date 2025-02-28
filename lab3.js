var DocType;
(function (DocType) {
    DocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocType["IntPassport"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442";
})(DocType || (DocType = {}));
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Eco"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Comfort"] = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
})(CarClass || (CarClass = {}));
class Owner {
    constructor(_surname, _name, _middlename, _birthDate, _documentType, _documentSeries, _documentNumber) {
        this._surname = _surname;
        this._name = _name;
        this._middlename = _middlename;
        this._birthDate = _birthDate;
        this._documentType = _documentType;
        this._documentSeries = _documentSeries;
        this._documentNumber = _documentNumber;
    }
    get surname() { return this._surname; }
    set surname(value) { this._surname = value; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get middlename() { return this._middlename; }
    set middlename(value) { this._middlename = value; }
    get birthDate() { return this._birthDate; }
    set birthDate(value) { this._birthDate = value; }
    get documentType() { return this._documentType; }
    set documentType(value) { this._documentType = value; }
    get documentSeries() { return this._documentSeries; }
    set documentSeries(value) { this._documentSeries = value; }
    get documentNumber() { return this._documentNumber; }
    set documentNumber(value) { this._documentNumber = value; }
    printOwnerInfo() {
        return `Фамилия: ${this._surname}\nИмя: ${this._name}\n Отчество: ${this._middlename}\n Дата рождения: ${this._birthDate.toLocaleDateString()}\n Тип документа: ${this._documentType}\n Серия документа: ${this._documentSeries}\n Номер документа: ${this._documentNumber}`;
    }
}
class Vehicle {
    constructor(_brand, _model, _year, _VIN, _registrationNumber, _owner) {
        this._brand = _brand;
        this._model = _model;
        this._year = _year;
        this._VIN = _VIN;
        this._registrationNumber = _registrationNumber;
        this._owner = _owner;
    }
    get brand() { return this._brand; }
    set brand(value) { this._brand = value; }
    get model() { return this._model; }
    set model(value) { this._model = value; }
    get year() { return this._year; }
    set year(value) { this._year = value; }
    get vin() { return this._VIN; }
    set vin(value) { this._VIN = value; }
    get registrationNumber() { return this._registrationNumber; }
    set registrationNumber(value) { this._registrationNumber = value; }
    get owner() { return this._owner; }
    set owner(value) { this._owner = value; }
    printVehicleInfo() {
        return `Марка: ${this._brand}\n Модель: ${this._model}\n Год выпуска: ${this._year}\nVIN: ${this._VIN}\n Регистрационный номер: ${this._registrationNumber}`;
    }
}
class Car extends Vehicle {
    constructor(brand, model, year, VIN, registrationNumber, owner, _bodyType, _carClass) {
        super(brand, model, year, VIN, registrationNumber, owner);
        this._bodyType = _bodyType;
        this._carClass = _carClass;
    }
    get bodyType() { return this._bodyType; }
    set bodyType(value) { this._bodyType = value; }
    get carClass() { return this._carClass; }
    set carClass(value) { this._carClass = value; }
    printVehicleInfo() {
        super.printVehicleInfo();
        return super.printVehicleInfo() + `\n Тип кузова: ${this._bodyType}\n Класс автомобиля: ${this._carClass}`;
    }
}
class Motorbike extends Vehicle {
    constructor(brand, model, year, VIN, registrationNumber, owner, _frameType, _isSport) {
        super(brand, model, year, VIN, registrationNumber, owner);
        this._frameType = _frameType;
        this._isSport = _isSport;
    }
    get frameType() { return this._frameType; }
    set frameType(value) { this._frameType = value; }
    get isSport() { return this._isSport; }
    set isSport(value) { this._isSport = value; }
    printVehicleInfo() {
        super.printVehicleInfo();
        return super.printVehicleInfo() + `\n Тип рамы: ${this._frameType}\n Для спорта: ${this._isSport}`;
    }
}
class VehicleStorage {
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    get created() { return this._created; }
    get data() { return this._data; }
    getAll() {
        return this._data;
    }
    save(data) {
        this._data.push(data);
    }
    remove(index) {
        this._data.splice(index, 1);
    }
}
const owner = new Owner("Гослинг", "Райан", "Драйвович", new Date(1990, 1, 2), DocType.Passport, "1234", "567890");
const car = new Car("Chevy", "Malibu", 1973, "1H57K3R460826", "A123BC", owner, BodyType.Sedan, CarClass.Comfort);
const motorbike = new Motorbike("Kawasaki", "H2R", 2025, "WAUZZZFY2M2061887", "D456EF", owner, "Сталь", true);
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(car);
vehicleStorage.save(motorbike);
console.log(owner.printOwnerInfo());
console.log(car.printVehicleInfo());
console.log(motorbike.printVehicleInfo());
vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));
