import { Datatypes as AnimalDatatypes, Animal } from "./animal";
import { Datatypes as AnimalTransactionDatatypes } from "./animalTransaction";
import { Datatypes as GroupDatatypes } from "./group";
import { Datatypes as PaddockDatatypes } from "./paddock";
import { Datatypes as FeedRecordDatatypes } from "./feedRecord";
import { Datatypes as MovementDatatypes } from "./movement";

export type AllDatatypes =
    AnimalDatatypes |
    AnimalTransactionDatatypes |
    GroupDatatypes |
    PaddockDatatypes |
    FeedRecordDatatypes |
    MovementDatatypes |
    undefined;

export const datatypes = {
    AnimalDatatypes,
    AnimalTransactionDatatypes,
    GroupDatatypes,
    PaddockDatatypes,
    FeedRecordDatatypes,
    MovementDatatypes,
}

import { AllClasses as AnimalClasses } from "./animal";
import { AllClasses as AnimalTransactionClasses } from "./animalTransaction";
import { AllClasses as GroupClasses } from "./group";
import { AllClasses as PaddockClasses } from "./paddock";
import { AllClasses as FeedRecordClasses } from "./feedRecord";
import { AllClasses as MovementClasses } from "./movement";

export type AllClasses =
    AnimalClasses |
    AnimalTransactionClasses |
    GroupClasses |
    PaddockClasses |
    FeedRecordClasses |
    MovementClasses |
    undefined;

export const displayableDatatypes = [
    AnimalDatatypes.Animal,
    GroupDatatypes.Group,
    PaddockDatatypes.Paddock
];

export const mapDatatypeToString = (datatype: AllDatatypes): string => {
    switch (datatype) {
        case AnimalDatatypes.Animal:
            return "Animal";
        case AnimalDatatypes.AnimalCount:
            return "AnimalCount";
        case AnimalTransactionDatatypes.AnimalTransaction:
            return "Animal Transaction";
        case GroupDatatypes.Group:
            return "Group";
        case GroupDatatypes.GroupValues:
            return "Group Values";
        case PaddockDatatypes.Paddock:
            return "Paddock";
        case FeedRecordDatatypes.FeedRecord:
            return "Feed Record"
        case MovementDatatypes.Movement:
            return "Movement"
        default:
            return "undefined";
    }
}