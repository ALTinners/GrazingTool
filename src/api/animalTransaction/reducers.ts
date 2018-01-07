import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";
import * as Luxon from "luxon";

import { AnimalTransaction } from "../animalTransaction";
import * as AnimalTransactionActions from "../animalTransaction/actions";

export type State = AnimalTransaction[];

const initialState: State = [
    new AnimalTransaction({animalId: "SHEEP", groupId: "SHEEP1", headCount: 30, date: Luxon.DateTime.fromISO("2018-01-17")}), 
    new AnimalTransaction({animalId: "SHEEP", groupId: "SHEEP1", headCount: -5, date: Luxon.DateTime.fromISO("2018-01-03")}),
];

export const animalTransactionReducer = (state: State = initialState, action: AnimalTransactionActions.AnimalTransactionAction): State => {
    switch (action.type) {
        case (getType(AnimalTransactionActions.addAnimalTransaction)):
            return state.concat([action.transaction]);
        case (getType(AnimalTransactionActions.modifyAnimalTransaction)):
        return state.map((animalTransaction: AnimalTransaction) => { return (animalTransaction.id == action.transaction.id ? action.transaction : animalTransaction) });
        case (getType(AnimalTransactionActions.deleteAnimalTransaction)):
            return state;
        default:
            return state;
    }
}