class StorageVeh {
    constructor() {
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    sortByOwnerLastName() {
        return this.vehicles.sort((a, b) => a.ownerLastName.localeCompare(b.ownerLastName));
    }
    getVehiclesByOwnerLastNamePrefix(prefix) {
        const lowerCasePrefix = prefix.toLowerCase();
        return this.vehicles.filter(vehicle => vehicle.ownerLastName.toLowerCase().startsWith(lowerCasePrefix));
    }
}
class Motorcycle {
    constructor(ownerLastName, type, frameType, isSport) {
        this.ownerLastName = ownerLastName;
        this.type = type;
        this.frameType = frameType;
        this.isSport = isSport;
    }
    getFrameInfo() {
        return `Тип рамы: ${this.frameType}, Спортивный: ${this.isSport ? 'Да' : 'Нет'}`;
    }
}
const storage = new StorageVeh();
storage.addVehicle(new Motorcycle("Иванов", "Мотоцикл", "Спортивная", true));
storage.addVehicle(new Motorcycle("Петров", "Мотоцикл", "Классическая", false));
storage.addVehicle(new Motorcycle("Сидоров", "Мотоцикл", "Спортивная", true));
const sortedVehicles = storage.sortByOwnerLastName();
console.log("Отсортированные транспортные средства:", sortedVehicles);
const filteredVehicles = storage.getVehiclesByOwnerLastNamePrefix("Ив");
console.log("Транспортные средства с фамилией, начинающейся на 'Ив':", filteredVehicles);
const motorcycle = new Motorcycle("Иванов", "Мотоцикл", "Спортивная", true);
console.log(motorcycle.getFrameInfo());
