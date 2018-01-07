import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";
import * as Luxon from "luxon";

import * as Actions from "./actions";
import { AllDatatypes } from "../datatypes";
import { Animal } from "../animal/index";

export interface PaddockFilterState {
    name: string;
}

export type State = {
    dataEditorDatatype: AllDatatypes;
    stockControlInterval: Luxon.Interval;
    paddockFilterState: PaddockFilterState;
}

const initialState: State = {
    dataEditorDatatype: undefined,
    stockControlInterval: Luxon.Interval.fromDateTimes(Luxon.DateTime.fromJSDate(new Date()), Luxon.DateTime.fromJSDate(new Date()).plus({ days: 90 })),
    paddockFilterState: {
        name: ""
    },
};

export const uiStateReducer = (state: State = initialState, action: Actions.AllActions): State => {
    switch (action.type) {
        case (getType(Actions.setDataEditorDatatype)):
            return {
                ...state,
                dataEditorDatatype: action.datatype
            }
        case (getType(Actions.setStockControlInterval)):
            return {
                ...state,
                stockControlInterval: action.interval
            }
        case (getType(Actions.setPaddockFilterState)):
        return {
            ...state,
            paddockFilterState: action.paddockFilterState
        }
        default:
            return state;
    }
}