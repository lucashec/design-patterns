import PriceCalculator from "./price-calculator";

export class ClubPriceCalculator implements PriceCalculator {
    calculate(hours: number): number {
        const hourPrice = 10;
        return hours * hourPrice;
    }

}