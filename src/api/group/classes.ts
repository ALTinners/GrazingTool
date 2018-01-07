import * as Luxon from "luxon";

import { BaseIdObject, IdType, BaseIdObjectProps, BaseDatedObject } from "../common";
import { Animal, } from "../animal";
import { AnimalTransaction, AnimalTransactionPair } from "../animalTransaction";
import { inherits } from "util";

export enum Datatypes {
    Group = "GROUP",
    GroupValues = "GROUP_VALUES",
}

export interface GroupProps extends BaseIdObjectProps {

}

export class Group extends BaseIdObject({
    type: Datatypes.Group,
})   {
    constructor(props: GroupProps) {
        super({
            type: Datatypes.Group,
            ...props
        });
    }
}

export interface GroupValues {
    readonly headCount: number;
    readonly requirement: number;
    readonly value: number;
}

export interface GroupDatedValuesProps extends BaseIdObjectProps {
    dateString: string;
    headCount: number;
    requirement: number;
    value: number;
    transactions: AnimalTransactionPair[];
}

export class GroupDatedValues implements GroupValues {
    dateString: string;
    headCount: number;
    requirement: number;
    value: number;
    transactions: AnimalTransactionPair[];

    constructor(props: GroupDatedValuesProps) {
        this.dateString = props.dateString
        this.headCount = props.headCount
        this.requirement = props.requirement
        this.value = props.value
        this.transactions = props.transactions
    }

}

// export class GroupDatedValues extends BaseIdObject implements GroupValues {
//     dateString: string;
//     headCount: number;
//     requirement: number;
//     value: number;
//     transactions: AnimalTransactionPair[];

//     constructor(props: GroupDatedValuesProps) {
//         super({
//             type: Datatypes.GroupValues,
//             ...props
//         });
//     }

//     readonly isValid = (): boolean => {
//         return true;
//     }
// }

export type GroupClasses = Group | GroupDatedValues;