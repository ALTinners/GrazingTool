import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { Animal } from "./classes";
import * as Actions from "./actions";

export type State = Animal[];

const initialState: State = [new Animal({name: "Sheep", requirement: 3, value: 2, id: "SHEEP"}), new Animal({name: "Cows", requirement: 10, value: 4}), new Animal({name: "Bulls", requirement: 6, value: 4})];

export const animalReducer = (state: State = initialState, action: Actions.AnimalAction): State => {
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