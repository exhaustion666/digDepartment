const owner1 = new Transport.VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), Transport.DocType.Passport, "1234", "567890");
const car1 = new Transport.CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1, Transport.BodyType.Sedan, Transport.CarClass.Business);
const motorbike1 = new Transport.MotorbikeImpl("Yamaha", "YZF-R3", 2021, "JYARJ23E0JA000001", "B456CD", owner1, "Спортивная", true);
const storage = new Transport.VehicleStorageImpl(new Date());
storage.addVehicle(car1);
storage.addVehicle(motorbike1);
console.log("Сведения о транспортных средствах:");
storage.getAllVehicles().forEach(vehicle => {
    vehicle.printInfo();
    console.log("------------------------------");
});
