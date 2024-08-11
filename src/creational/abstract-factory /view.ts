import { Button } from "./button";
import { Label } from "./label";
import WidgetFactory from "./widget-factory";

export default class View {
    label: Label;
    button: Button;
    constructor(widgetFactory: WidgetFactory) {
        this.label = widgetFactory.createLabel();
        this.button = widgetFactory.createButton();
    }
}