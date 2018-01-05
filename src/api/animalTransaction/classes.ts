import * as Luxon from "luxon";

import { BaseDatedObject, IdType } from "../common";
import { Animal } from "../animal";

export enum Datatypes {
    AnimalTransaction = "ANIMAL_TRANSACTION",
}

export class AnimalTransaction extends BaseDatedObject {
    animalId: IdType;
    groupId: IdType;
    count: number;        //The number of animals coming in or out
    grouping: number | undefined;          //A grouping for making a number of Transactions linked
    tags: string[] | undefined;

    constructor(animalId: IdType, groupId: IdType, quantity: number, date: Luxon.DateTime,
        grouping?: number, tags?: string[], id?: IdType) {
        super(Datatypes.AnimalTransaction, date, undefined, id);
        this.animalId = animalId;
        this.groupId = groupId;
        this.count = quantity;
        this.grouping = grouping;
        this.tags = tags;
    }
}

export interface AnimalTransactionPair {
    animal: Animal | undefined;
    transaction: AnimalTransaction;
}

export type AllClasses = AnimalTransaction;