import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { Allocation } from "./classes";
import * as Actions from "./actions";

export type State = Allocation[];

const initialState: State = [];

const allocations = (state: State = initialState, action: Actions.AllocationAction): State => {
    switch (action.type) {
        case (getType(Actions.addAllocation)):
            return state.concat([action.allocation]);
        case (getType(Actions.modifyAllocation)):
            return state.map((allocation: Allocation) => { return (allocation.id == action.allocation.id ? action.allocation : allocation) });
        case (getType(Actions.deleteAllocation)):
            return state.filter((allocation: Allocation) => allocation.id !== action.allocation.id);
        default:
            return state;
    }
}

export const reducer = allocations;