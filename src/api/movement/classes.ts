import * as Luxon from "luxon";

import { BaseIdObject, IdType, BaseDatedObject } from "../common";

export enum Datatypes {
    Movement = "MOVEMENT"
}

export class Movement extends BaseDatedObject {
    paddock: IdType;
    groups: IdType[];
    constructor(date: Luxon.DateTime, paddock: IdType, groups: IdType[]) {
        super(Datatypes.Movement, date);
        this.paddock = paddock;
        this.groups = groups;
    }

    readonly isValid = (): boolean => {
        return (this.date.isValid);
    }
}

export type AllClasses = Movement;