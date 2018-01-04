import * as Luxon from "luxon";

import { BaseIdObject, IdType } from "../common";

export enum Datatypes {
    FeedRecord = "FEED_RECORD"
}

export class FeedRecord extends BaseIdObject {
    date: Luxon.DateTime;
    paddocks: IdType[];
    notes: string[];
    constructor(date: Luxon.DateTime,paddocks: IdType[],notes: string[]) {
        super(Datatypes.FeedRecord);
        this.date = date;
        this.paddocks = paddocks;
        this.notes = notes;
    }
}

export type AllClasses = FeedRecord;