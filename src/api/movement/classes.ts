import * as Luxon from "luxon";

import { BaseIdObject, IdType } from "../common";

export enum Datatypes {
    Movement = "FEED_RECORD"
}

export class Movement extends BaseIdObject {
    date: Luxon.DateTime;
    paddock: IdType;
    groups: IdType[];
    constructor(date: Luxon.DateTime, paddock: IdType, groups: IdType[]) {
        super(Datatypes.Movement);
        this.date = date;
        this.paddock = paddock;
        this.groups = groups;
    }
}

export type AllClasses = Movement;