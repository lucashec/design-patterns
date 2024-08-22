import InputText from "./input-text";
import Label from "./label";

test('Should create a reactive componente',  () => {
    const inputText = new InputText("country");
    const labelA = new Label("País: {{country}}");
    const labelB = new Label("Country: {{country}}");
    inputText.register(labelA);
    inputText.register(labelB);
    inputText.setValue("Brasil");
    expect(labelA.Value).toBe("País: Brasil");
    expect(labelB.Value).toBe("Country: Brasil");
});