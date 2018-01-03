import * as Luxon from "luxon";

import { 
    Animal, 
    AnimalTransaction,
} from "../";

export const findAnimalForTransaction = (transaction: AnimalTransaction, animals: Animal[]): Animal | undefined => {
    let filtered = animals.filter( (animal) => animal.id == transaction.animalId );
    if (filtered.length === 1) {
        return filtered[0];
    } else {
        return undefined;
    }
} 