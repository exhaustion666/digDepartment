// Transport.ts
var Transport;
(function (Transport) {
    let DocType;
    (function (DocType) {
        DocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        DocType["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    class VehicleOwner {
        constructor(_lastName, _firstName, _middleName, _birthDate, _docType, _documentSeries, _documentNumber) {
            this._lastName = _lastName;
            this._firstName = _firstName;
            this._middleName = _middleName;
            this._birthDate = _birthDate;
            this._docType = _docType;
            this._documentSeries = _documentSeries;
            this._documentNumber = _documentNumber;
        }
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
        printInfo() {
            console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
            console.log(`Тип документа: ${this._docType}`);
            console.log(`Серия: ${this._documentSeries}`);
            console.log(`Номер: ${this._documentNumber}`);
        }
    }
    Transport.VehicleOwner = VehicleOwner;
    class VehicleImpl {
        constructor(_brand, _model, _year, _vin, _registrationNumber, _owner) {
            this._brand = _brand;
            this._model = _model;
            this._year = _year;
            this._vin = _vin;
            this._registrationNumber = _registrationNumber;
            this._owner = _owner;
        }
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
        printInfo() {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN: ${this._vin}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
            console.log(`Информация о владельце:`);
            this._owner.printInfo();
        }
    }
    Transport.VehicleImpl = VehicleImpl;
    class CarImpl extends VehicleImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, _bodyType, _carClass) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = _bodyType;
            this._carClass = _carClass;
        }
        get bodyType() {
            return this._bodyType;
        }
        get carClass() {
            return this._carClass;
        }
        printInfo() {
            super.printInfo();
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
    }
    Transport.CarImpl = CarImpl;
    class MotorbikeImpl extends VehicleImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, _frameType, _isSports) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._frameType = _frameType;
            this._isSports = _isSports;
        }
        get frameType() {
            return this._frameType;
        }
        get isSports() {
            return this._isSports;
        }
        printInfo() {
            super.printInfo();
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._isSports}`);
        }
    }
    Transport.MotorbikeImpl = MotorbikeImpl;
    class VehicleStorageImpl {
        constructor(creationDate) {
            this.creationDate = creationDate;
            this.vehicles = [];
        }
        getAllVehicles() {
            return this.vehicles;
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
    }
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (Transport = {}));
