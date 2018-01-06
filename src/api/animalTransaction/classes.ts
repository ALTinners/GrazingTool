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

    setAnimalId = (id: IdType): AnimalTransaction => {
        return this.set("animalId", id);
    }

    setGroupId = (id: IdType): AnimalTransaction => {
        return this.set("groupId", id);
    }

    setCount = (count: number): AnimalTransaction => {
        console.log(this);
        return this.set("count", count);
    }

    setDate = (date: Luxon.DateTime): AnimalTransaction => {
        return this.set("date", date);
    }

    isValid = (): boolean => {
        return (this.date.isValid);
    }
}

export interface AnimalTransactionPair {
    animal: Animal | undefined;
    transaction: AnimalTransaction;
}

export type AllClasses = AnimalTransaction;