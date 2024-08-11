import { Button } from "./button";
import { DarkButton } from "./dark-button";
import { DarkLabel } from "./dark-label";
import { Label } from "./label";
import WidgetFactory from "./widget-factory";

export default class DarkWidgetFactory implements WidgetFactory {
    createLabel(): Label {
        return new DarkLabel();
    }
    createButton(): Button {
        return new DarkButton();
    }

}