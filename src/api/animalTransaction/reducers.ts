import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { AnimalTransaction } from "../animalTransaction";
import * as AnimalTransactionActions from "../animalTransaction/actions";

export type State = AnimalTransaction[];

const initialState: State = [];

const transactions = (state: State = initialState, action: AnimalTransactionActions.AnimalTransactionAction): State => {
    switch (action.type) {
        case (getType(AnimalTransactionActions.addAnimalTransaction)):
            return state.concat([action.transaction]);
        case (getType(AnimalTransactionActions.modifyAnimalTransaction)):
            return state;
        case (getType(AnimalTransactionActions.deleteAnimalTransaction)):
            return state;
        default:
            return state;
    }
}

export const reducer = transactions;