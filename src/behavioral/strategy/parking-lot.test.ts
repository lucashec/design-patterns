import { AirportPriceCalculator } from "./airport-price-calculator";
import { ClubPriceCalculator } from "./club-price-calculator";
import ParkingLot from "./parking-lot";
import { TheaterPriceCalculator } from "./theater-price-calculator";

test('should create a parking lot', () => {
    const parkingLot = new ParkingLot("theater", 500, new TheaterPriceCalculator());
    expect(parkingLot.getEmptySpaces()).toBe(500);
});

test('should enter a car', () => {
    const parkingLot = new ParkingLot("theater", 500, new TheaterPriceCalculator());
    parkingLot.checkIn("MXO-7138", new Date("2024-01-01T20:00:00"))
    expect(parkingLot.getEmptySpaces()).toBe(499);
});

test('should leave a car', () => {
    const parkingLot = new ParkingLot("theater", 500, new TheaterPriceCalculator());
    parkingLot.checkIn("MXO-7138", new Date("2024-01-01T20:00:00"))
    parkingLot.checkout("MXO-7138", new Date("2024-01-01T23:00:00"))
    expect(parkingLot.getEmptySpaces()).toBe(500);
});

test('should calculate the total price at the theater, that have a fixed price of 20 dollars for all the time', () => {
    const parkingLot = new ParkingLot("theater", 500, new TheaterPriceCalculator());
    parkingLot.checkIn("MXO-7138", new Date("2024-01-01T20:00:00"))
    const price = parkingLot.checkout("MXO-7138", new Date("2024-01-01T23:00:00"))
    expect(price).toBe(20);
});

test('should calculate the total price at the club, that have a cost of 20 dollars per hour', () => {
    const parkingLot = new ParkingLot("club", 500, new ClubPriceCalculator());
    parkingLot.checkIn("MXO-7138", new Date("2024-01-01T20:00:00"))
    const price = parkingLot.checkout("MXO-7138", new Date("2024-01-01T22:00:00"))
    expect(price).toBe(20);
});

test('should calculate the total price at the airport, that have a initial price of 20 dollars and after 3 hours, is added 10 dollar per additional hour', () => {
    const parkingLot = new ParkingLot("airport", 500, new AirportPriceCalculator());
    parkingLot.checkIn("MXO-7138", new Date("2024-01-01T10:00:00"))
    const price = parkingLot.checkout("MXO-7138", new Date("2024-01-01T14:00:00"))
    expect(price).toBe(30);
});