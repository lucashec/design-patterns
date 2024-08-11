export class ApplePayTransaction {
    constructor(
        readonly code: string,
        readonly grossAmount: number,
        readonly situation: number,
    ) {}
}