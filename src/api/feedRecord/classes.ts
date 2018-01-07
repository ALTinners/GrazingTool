import * as Luxon from "luxon";

import { BaseDatedObject, BaseDatedObjectProps, IdType } from "../common";

export enum Datatypes {
    FeedRecord = "FEED_RECORD"
}

export interface FeedRecordProps extends BaseDatedObjectProps {
    paddockIds: IdType[];
    notes: string[];
}

export class FeedRecord extends BaseDatedObject({
    type: Datatypes.FeedRecord,
    paddockIds: undefined,
    notes: undefined
})  {
    paddockIds: IdType[];
    notes: string[];
    constructor(props: FeedRecordProps) {
        super({
            type: Datatypes.FeedRecord, 
            ...props
        });
    }

    readonly isValid = (): boolean => {
        return (this.date.isValid);
    }
}

export type AllClasses = FeedRecord;