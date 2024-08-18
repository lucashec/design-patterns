import { Participant } from "./participant"

export default class Channel {
    readonly participants: Participant[];
    constructor() {
        this.participants = []
    }

    register(participant: Participant) {
        this.participants.push(participant);
    }

    broadcast(emitter: Participant, message: string) {
        for (const receiver of this.participants) {
            if (emitter.name === receiver.name) continue;
            receiver.receive(emitter, message);
        }
    }
}