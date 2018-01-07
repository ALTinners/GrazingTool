import * as Luxon from "luxon";
import * as uuid from "uuid";

import { BaseDatedObject, IdType, BaseDatedObjectProps } from "../common";
import { Animal } from "../animal";

export enum Datatypes {
    AnimalTransaction = "ANIMAL_TRANSACTION",
}

export interface AnimalTransactionProps extends BaseDatedObjectProps {
    animalId: IdType;
    groupId: IdType;
    headCount: number;
    grouping?: number;
    tags?: string[];
}

export class AnimalTransaction extends BaseDatedObject({
    type: Datatypes.AnimalTransaction,
    animalId: "",
    groupId: "",
    headCount: 0,
    grouping: undefined,
    tags: undefined,
}) {
    animalId: IdType;
    groupId: IdType;
    headCount: number;        //The number of animals coming in or out
    grouping: number | undefined;          //A grouping for making a number of Transactions linked
    tags: string[] | undefined;

    isValid: () => boolean;

    constructor(props: AnimalTransactionProps) {
        super({
            ...props
        });
    }
}

AnimalTransaction.prototype.isValid = function() {
    return (this.headCount != NaN);
}

export interface AnimalTransactionPair {
    animal: Animal | undefined;
    transaction: AnimalTransaction;
}

export type AllClasses = AnimalTransaction;