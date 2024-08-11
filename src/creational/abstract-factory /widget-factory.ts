import { Button } from "./button";
import { Label } from "./label";

export default interface WidgetFactory {
    createLabel(): Label;
    createButton(): Button;
}