import { Reducer, combineReducers } from "redux";

import { Paddock } from "./classes";
import { Actions } from "./actions";

interface PaddockAction {
    type: Actions,
    paddock: Paddock
}

export type State = Paddock[];

const initialState: State = [];

const paddocks = (state: State = initialState, action: PaddockAction): State => {
    switch (action.type) {
        default:
            return state
    }
}

export const reducer = paddocks;