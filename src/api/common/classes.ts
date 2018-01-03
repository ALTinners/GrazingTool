import * as JQuery from "jquery";
import * as uuid from "uuid";

export type IdType = string;

export class BaseIdObject {
    id: IdType;
    type: string;
    name: string;

    constructor(type: string, name?: string, id: IdType = uuid.v4() ) {
        this.id = id;
        this.type = type;
        this.name = (name ? name : "");
    }

    public clone(): this & {} {
        return JQuery.extend(true, {}, this);
    }
}