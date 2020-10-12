import { Markup, MarkupView } from "./markup";
import * as p from "../../core/properties";
export declare class DivView extends MarkupView {
    model: Div;
    render(): void;
}
export declare namespace Div {
    type Attrs = p.AttrsOf<Props>;
    type Props = Markup.Props & {
        render_as_text: p.Property<boolean>;
    };
}
export interface Div extends Div.Attrs {
}
export declare class Div extends Markup {
    properties: Div.Props;
    constructor(attrs?: Partial<Div.Attrs>);
    static init_Div(): void;
}
