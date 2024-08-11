import PriceCalculator from "./price-calculator";

export class TheaterPriceCalculator implements PriceCalculator {
    calculate(hours: number): number {
        const hourPrice = 20;
        return hourPrice;
    }

}