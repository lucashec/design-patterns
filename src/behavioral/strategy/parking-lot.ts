import PriceCalculator from "./price-calculator";

export default class ParkingLot {
    parkedCars: {plate: string; checkInDate: Date}[];
    constructor(
        readonly location: string, 
        readonly capacity: number,
        readonly priceCalculator: PriceCalculator,
    ) {
        this.parkedCars = [];
    }

    checkIn(plate: string, checkInDate: Date) {
        this.parkedCars.push({plate, checkInDate});
    }

    checkout(plate: string, checkoutDate: Date) {
        const parkedCar = this.parkedCars.find((car) => car.plate === plate);
        if (!parkedCar) throw new Error("Car not found");
        this.parkedCars.splice(this.parkedCars.indexOf(parkedCar, 1));
        const hoursBetweenDates = (checkoutDate.getTime() - parkedCar.checkInDate.getTime()) / (1000*60*60);
        return this.priceCalculator.calculate(hoursBetweenDates);
    }

    getEmptySpaces() {
        return this.capacity - this.parkedCars.length;
    }
}