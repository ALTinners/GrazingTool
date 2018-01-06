import * as Luxon from "luxon";

import { BaseDatedObject, IdType } from "../common";

export enum Datatypes {
    FeedRecord = "FEED_RECORD"
}

export class FeedRecord extends BaseDatedObject {
    paddockIds: IdType[];
    notes: string[];
    constructor(date: Luxon.DateTime, paddockIds: IdType[], notes: string[]) {
        super(Datatypes.FeedRecord, date);
        this.paddockIds = paddockIds;
        this.notes = notes;
    }

    readonly isValid = (): boolean => {
        return (this.date.isValid);
    }
}

export type AllClasses = FeedRecord;