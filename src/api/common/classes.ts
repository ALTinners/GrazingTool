import * as JQuery from "jquery";
import * as uuid from "uuid";
import * as Luxon from "luxon";

export type IdType = string;

export class BaseIdObject {
    readonly id: IdType;
    readonly type: string;
    readonly name: string;

    constructor(type: string, name?: string, id: IdType = uuid.v4() ) {
        this.id = id;
        this.type = type;
        this.name = (name ? name : "");
    }

    public clone(): this & {} {
        return JQuery.extend(true, {}, this);
    }
}

export class BaseDatedObject extends BaseIdObject {
    readonly date: Luxon.DateTime;

    constructor(type: string, date: Luxon.DateTime, name?: string, id?: IdType ) {
        super(type, name, id);
        this.date = date;
    }
}