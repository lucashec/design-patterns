export class Participant {
    messages: string[] = [];
    constructor(readonly name: string){}

    receive(participant: Participant, message: string) {
        this.messages.push(`${this.name} receive a message: ${message} from participant: ${participant.name}`); 
    }
}