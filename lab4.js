"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let DocType;
    (function (DocType) {
        DocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        DocType["IntPassport"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Eco"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Comfort"] = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
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
            return `Фамилия: ${this._surname}\nИмя: ${this._name}\nОтчество: ${this._middlename}\nДата рождения: ${this._birthDate.toLocaleDateString()}\nТип документа: ${this._documentType}\nСерия документа: ${this._documentSeries}\nНомер документа: ${this._documentNumber}`;
        }
    }
    Transport.Owner = Owner;
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
            return `Марка: ${this._brand}\nМодель: ${this._model}\nГод выпуска: ${this._year}\nVIN: ${this._VIN}\nРегистрационный номер: ${this._registrationNumber}`;
        }
    }
    Transport.Vehicle = Vehicle;
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
            return `${super.printVehicleInfo()}\nТип кузова: ${this._bodyType}\nКласс автомобиля: ${this._carClass}`;
        }
    }
    Transport.Car = Car;
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
            return `${super.printVehicleInfo()}\nТип рамы: ${this._frameType}\nДля спорта: ${this._isSport}`;
        }
    }
    Transport.Motorbike = Motorbike;
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
            if (index >= 0 && index < this._data.length) {
                this._data.splice(index, 1);
            }
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
