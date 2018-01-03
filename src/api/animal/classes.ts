import * as Luxon from "luxon";

import { BaseIdObject, IdType } from "../common";
import { AnimalTransaction } from "../animalTransaction";

export enum Datatypes {
    Animal = "ANIMAL",
    AnimalCount = "ANIMAL_COUNT"
}

export class Animal extends BaseIdObject {
    requirement: number;
    value: number;

    constructor(name: string, requirement: number, value: number, id?: IdType) {
        super(Datatypes.Animal, name, id);
        this.requirement = requirement;
        this.value = value;
    }

    isValid = (): boolean => {
        return (this.name.length > 0 && this.requirement != NaN && this.value != NaN);
    }

    setName = (name: string) : Animal => {
        return new Animal(name, this.requirement, this.value, this.id);
    }

    setRequirement = (requirement: number) : Animal => {
        return new Animal(this.name, requirement, this.value, this.id);
    }

    setValue = (value: number) : Animal => {
        return new Animal(this.name, this.requirement, value, this.id);
    }
}

export class AnimalCount extends BaseIdObject {
    animal: Animal;
    count: number;

    constructor(animal: Animal) {
        super(Datatypes.AnimalCount);
        this.animal = animal;
        this.count = 0;
    }

    applyTransaction(transaction: AnimalTransaction) {
        this.count += transaction.count;
    }
}

export type AllClasses = Animal | AnimalCount;