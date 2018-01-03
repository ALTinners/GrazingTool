import * as Luxon from "luxon";

import { BaseIdObject, IdType } from "../common";
import { Animal } from "../animal";

export enum Datatypes {
    AnimalTransaction = "ANIMAL_TRANSACTION",
}

export class AnimalTransaction extends BaseIdObject {
    animalId: IdType;
    groupId: IdType;
    count: number;        //The number of animals coming in or out
    date: Luxon.DateTime;
    grouping: number | undefined;          //A grouping for making a number of Transactions linked
    tags: string[] | undefined;

    constructor(animalId: IdType, groupId: IdType, quantity: number, date: Luxon.DateTime,
        grouping?: number, tags?: string[]) {
        super(Datatypes.AnimalTransaction);
        this.animalId = animalId;
        this.groupId = groupId;
        this.count = quantity;
        this.date = date;
        this.grouping = grouping;
        this.tags = tags;
    }
}

export interface AnimalTransactionPair {
    animal: Animal | undefined;
    transaction: AnimalTransaction;
}

export type AllClasses = AnimalTransaction;