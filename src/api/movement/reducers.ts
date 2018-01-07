import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { Movement } from "./classes";
import * as Actions from "./actions";

export type State = Movement[];

const initialState: State = [];

export const movementReducer = (state: State = initialState, action: Actions.MovementAction): State => {
    switch (action.type) {
        case (getType(Actions.addMovement)):
            return state.concat([action.movement]);
        case (getType(Actions.modifyMovement)):
            return state.map((movement: Movement) => { return (movement.id == action.movement.id ? action.movement : movement) });
        case (getType(Actions.deleteMovement)):
            return state.filter((movement: Movement) => movement.id !== action.movement.id);
        default:
            return state;
    }
}