interface ITransport {
    ownerLastName: string;
    type: string;
}

class StorageVeh {
    private vehicles: ITransport[] = [];

    addVehicle(vehicle: ITransport): void {
        this.vehicles.push(vehicle);
    }

    sortByOwnerLastName(): ITransport[] {
        return this.vehicles.sort((a, b) => a.ownerLastName.localeCompare(b.ownerLastName));
    }

    getVehiclesByOwnerLastNamePrefix(prefix: string): ITransport[] {
        const lowerCasePrefix = prefix.toLowerCase();
        return this.vehicles.filter(vehicle =>
            vehicle.ownerLastName.toLowerCase().startsWith(lowerCasePrefix)
        );
    }
}

class Motorcycle implements ITransport {
    constructor(
        public ownerLastName: string,
        public type: string,
        private frameType: string,
        private isSport: boolean
    ) {}

    getFrameInfo(): string {
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
