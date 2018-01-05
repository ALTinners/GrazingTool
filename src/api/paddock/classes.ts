import * as Luxon from "luxon";

import { BaseIdObject } from "../common";

export enum Datatypes {
    Paddock = "PADDOCK",
    PaddockFeedValues = "PADDOCK_FEED_VALUES"
}

export interface GrowthRateType {
    growthRate: number;
    date: Luxon.DateTime;   
};

export class Paddock extends BaseIdObject {
    name: string;
    growthRates: GrowthRateType[];
    constructor(name: string, growthRate: GrowthRateType[]) {
        super(Datatypes.Paddock);
        this.name = name;
        this.growthRates = growthRate;
    }
}

interface PaddockFeedValues {
    readonly feedValue: number;
}

export class DatedPaddockFeedValues extends BaseIdObject implements PaddockFeedValues {
    date: string;
    feedValue: number;

    constructor(
        date: Luxon.DateTime,
        feedValue: number) {
        super(Datatypes.PaddockFeedValues);
        this.date = date.toLocaleString();
        this.feedValue = feedValue;
    }
}

export type AllClasses = Paddock | DatedPaddockFeedValues;