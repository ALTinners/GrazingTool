import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { Animal } from "./classes";
import * as Actions from "./actions";

export type State = Animal[];

const initialState: State = [new Animal("Sheep", 3, 2), new Animal("Cows", 10, 4), new Animal("Bulls", 6, 4)];

const animals = (state: State = initialState, action: Actions.AnimalAction): State => {
    switch (action.type) {
        case (getType(Actions.addAnimal)):
            return state.concat([action.animal]);
        case (getType(Actions.modifyAnimal)):
            return state.map((animal: Animal) => { return (animal.id == action.animal.id ? action.animal : animal) });
        case (getType(Actions.deleteAnimal)):
            return state.filter((animal: Animal) => animal.id !== action.animal.id);
        default:
            return state;
    }
}

export const reducer = animals;