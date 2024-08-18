import Channel from "./channel";
import { Participant } from "./participant";

test('should create a chat between participants', () => {
    const participantA = new Participant("Participant A");
    const participantB = new Participant("Participant B");
    const participantC = new Participant("Participant C");
    participantB.receive(participantA, "hello");
    participantC.receive(participantA, "hello");
    expect(participantB.messages[0]).toBe('Participant B receive a message: hello from participant: Participant A');
    expect(participantC.messages[0]).toBe('Participant C receive a message: hello from participant: Participant A');
}); 

test('should create a chat room between participants', () => {
    const participantA = new Participant("Participant A");
    const participantB = new Participant("Participant B");
    const participantC = new Participant("Participant C");
    const channel = new Channel();
    channel.register(participantA);
    channel.register(participantB);
    channel.register(participantC)
    channel.broadcast(participantA, "hello");
    expect(participantB.messages[0]).toBe('Participant B receive a message: hello from participant: Participant A');
    expect(participantC.messages[0]).toBe('Participant C receive a message: hello from participant: Participant A');
});