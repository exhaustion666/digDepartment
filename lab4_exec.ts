import { Transport } from "./lab4.js";
import DocType = Transport.DocType;
import BodyType = Transport.BodyType;
import CarClass = Transport.CarClass;
import Owner = Transport.Owner;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import IVehicle = Transport.IVehicle;
import VehicleStorage = Transport.VehicleStorage;

const owner = new Owner("Гослинг", "Райан", "Драйвович", new Date(1990, 1, 2), DocType.Passport, "1234", "567890");
const car = new Car("Chevy", "Malibu", 1973, "1H57K3R460826", "A123BC", owner, BodyType.Sedan, CarClass.Comfort);
const motorbike = new Motorbike("Kawasaki", "H2R", 2025, "WAUZZZFY2M2061887", "D456EF", owner, "Сталь", true);
const vehicleStorage = new VehicleStorage<IVehicle>();
vehicleStorage.save(car);
vehicleStorage.save(motorbike);

console.log(owner.printOwnerInfo());
console.log(car.printVehicleInfo());
console.log(motorbike.printVehicleInfo());

vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));