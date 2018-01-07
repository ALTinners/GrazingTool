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

import { AnimalClasses } from "./animal";
import { AnimalTransactionClasses } from "./animalTransaction";
import { GroupClasses } from "./group";
import { PaddockClasses } from "./paddock";
import { FeedRecordClasses } from "./feedRecord";
import { MovementClasses } from "./movement";

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
    PaddockDatatypes.Paddock,
    AnimalTransactionDatatypes.AnimalTransaction
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