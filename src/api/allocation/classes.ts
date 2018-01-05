import * as Luxon from "luxon";

import { BaseIdObject, IdType } from "../common";

export enum Datatypes {
    Allocation = "ALLOCATION"
}

export class Allocation extends BaseIdObject {
    startDate: Luxon.DateTime;
    endDate: Luxon.DateTime;
    paddocks: IdType[];
    groups: IdType[];
    constructor(startDate: Luxon.DateTime, endDate: Luxon.DateTime, paddocks: IdType[] = [], groups: IdType[] = []) {
        super(Datatypes.Allocation);
        this.startDate = startDate;
        this.endDate = endDate;
        this.groups = groups;
        this.paddocks = paddocks;
    }
}

export type AllClasses = Allocation;