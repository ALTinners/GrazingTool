import * as Luxon from "luxon";

import { BaseIdObject, IdType } from "../common";
import { Animal, AnimalCount, } from "../animal";
import { AnimalTransaction, AnimalTransactionPair } from "../animalTransaction";
import { inherits } from "util";

export enum Datatypes {
    Group = "GROUP",
    GroupValues = "GROUP_VALUES",
}

export class Group extends BaseIdObject {
    constructor(name: string, id?: IdType) {
        super(Datatypes.Group, name, id);
    }
}

export interface GroupValues {
    readonly count: number;
    readonly requirement: number;
    readonly value: number;
}

export class GroupDatedValues extends BaseIdObject implements GroupValues {
    date: string;
    count: number;
    requirement: number;
    value: number;
    transactions: AnimalTransactionPair[];

    constructor(
        date: Luxon.DateTime,
        count: number,
        requirement: number,
        value: number,
        transactions: AnimalTransactionPair[]) {
        super(Datatypes.GroupValues);
        this.date = date.toLocaleString();
        this.count = count;
        this.requirement = requirement;
        this.value = value;
        this.transactions = transactions;
    }

    readonly isValid = (): boolean => {
        return true;
    }
}

export type AllClasses = Group | GroupDatedValues;