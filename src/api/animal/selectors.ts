import {
    AppState,
    Animal,
    IdType
} from "../"

export const getAnimals = (state: AppState): Animal[] => state.animals;
export const getAnimalForId = (state: AppState, id: IdType): Animal | undefined => state.animals.find((animal: Animal) => animal.id === id); 