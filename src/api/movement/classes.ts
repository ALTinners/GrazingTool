import * as Luxon from "luxon";

import { BaseIdObject, IdType, BaseDatedObject, BaseDatedObjectProps } from "../common";

export enum Datatypes {
    Movement = "MOVEMENT"
}

export interface MovementProps extends BaseDatedObjectProps {
    paddock: IdType;
    groups: IdType[];
}

export class Movement extends BaseDatedObject({
    type: Datatypes.Movement,
    paddock: undefined,
    groups: undefined
}) {

    paddock: IdType;
    groups: IdType[];

    constructor(props: MovementProps) {
        super({
            type: Datatypes.Movement,
            ...props
        });
    }

    readonly isValid = (): boolean => {
        return (this.date.isValid);
    }
}

export type AllClasses = Movement;