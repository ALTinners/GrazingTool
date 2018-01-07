import * as Luxon from "luxon";

import { BaseIdObject, IdType, BaseIdObjectProps } from "../common";
import { AnimalTransaction } from "../animalTransaction";

export enum Datatypes {
    Animal = "ANIMAL",
    AnimalCount = "ANIMAL_COUNT"
}

export interface AnimalProps extends BaseIdObjectProps {
    name: string,
    requirement: number,
    value: number,
}

export class Animal extends BaseIdObject({
    type: Datatypes.Animal,
    requirement: 0,
    value: 0,
}) {
    requirement: number;
    value: number;
    isValid: () => boolean;

    constructor(props: AnimalProps) {
        super(props);
    }
}

Animal.prototype.isValid = function() {
    return (this.name.length > 0 && this.requirement != NaN && this.value != NaN);
}

export type AllClasses = Animal;