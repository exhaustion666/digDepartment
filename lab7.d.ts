interface ITransport {
    ownerLastName: string;
    type: string;
}
declare class StorageVeh {
    private vehicles;
    addVehicle(vehicle: ITransport): void;
    sortByOwnerLastName(): ITransport[];
    getVehiclesByOwnerLastNamePrefix(prefix: string): ITransport[];
}
declare class Motorcycle implements ITransport {
    ownerLastName: string;
    type: string;
    private frameType;
    private isSport;
    constructor(ownerLastName: string, type: string, frameType: string, isSport: boolean);
    getFrameInfo(): string;
}
declare const storage: StorageVeh;
declare const sortedVehicles: any;
declare const filteredVehicles: any;
declare const motorcycle: Motorcycle;
