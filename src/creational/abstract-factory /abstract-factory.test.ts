import DarkWidgetFactory from "./dark-widget-factory";
import LightWidgetFactory from "./light-widget-factory";
import View from "./view";

test("Should create a graphical interface with light theme",  () => {
    const view = new View(new LightWidgetFactory());
    expect(view.button.backgroundColor).toBe('white');
    expect(view.button.color).toBe('black');
    expect(view.label.color).toBe('black');
});

test("Should create a graphical interface with dark theme",  () => {
    const view = new View(new DarkWidgetFactory());
    expect(view.button.backgroundColor).toBe('black');
    expect(view.button.color).toBe('white');
    expect(view.label.color).toBe('white');
});