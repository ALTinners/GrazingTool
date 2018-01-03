import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";
import * as Luxon from "luxon";

import * as Actions from "./actions";
import { AllDatatypes } from "../datatypes";
import { Animal } from "../animal/index";

export type State = {
    dataEditorDatatype: AllDatatypes;
    stockControlStartDate: Luxon.DateTime;
    stockControlEndDate: Luxon.DateTime;
}

const initialState: State = {
    dataEditorDatatype: undefined,
    stockControlStartDate: Luxon.DateTime.fromJSDate(new Date()),
    stockControlEndDate: Luxon.DateTime.fromJSDate(new Date()).plus({ days: 90 })
};

const uiState = (state: State = initialState, action: Actions.AllActions): State => {
    switch (action.type) {
        case (getType(Actions.setDataEditorDatatype)):
            return {
                ...state,
                dataEditorDatatype: action.datatype
            }
        case (getType(Actions.setStockControlStartDate)):
            return {
                ...state,
                stockControlStartDate: action.date
            }
        case (getType(Actions.setStockControlEndDate)):
            return {
                ...state,
                stockControlEndDate: action.date
            }
        default:
            return state;
    }
}

export const reducer = uiState;