import { BaseIdObject } from "../common";

export enum Datatypes {
    Paddock = "PADDOCK"
}

export class Paddock extends BaseIdObject {
    name: string;
    constructor(name: string) {
        super(Datatypes.Paddock);
        this.name = name;
    }
}

export type AllClasses = Paddock;