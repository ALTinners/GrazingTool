import { createAction } from "typesafe-actions";
import * as Luxon from "luxon";

import { AllDatatypes } from "../datatypes";
import { datatypes } from "../index";
import { PaddockFilterState } from "./reducers";

enum ActionTypes {
    SetDataEditorDatatype = "SET_DATA_EDITOR_DATATYPE",
    SetStockControlInterval = "SET_STOCK_CONTROL_INTERVAL",
    SetPaddockFilterState = "SET_PADDOCK_FILTER_STATE",
}

export interface SetDataEditorDatatypeAction {
    readonly type: ActionTypes.SetDataEditorDatatype,
    readonly datatype: AllDatatypes
} 

export const setDataEditorDatatype = createAction(ActionTypes.SetDataEditorDatatype,
    (datatype: AllDatatypes) => { return { type: ActionTypes.SetDataEditorDatatype, datatype: datatype } }
);

export interface SetStockControlIntervalAction {
    readonly type: ActionTypes.SetStockControlInterval,
    readonly interval: Luxon.Interval;
}

export const setStockControlInterval = createAction(ActionTypes.SetStockControlInterval,
    (interval: Luxon.Interval) => { return { type: ActionTypes.SetStockControlInterval, interval } }
);

export interface SetPaddockFilterStateAction {
    readonly type: ActionTypes.SetPaddockFilterState,
    readonly paddockFilterState: PaddockFilterState;
}

export const setPaddockFilterState = createAction(ActionTypes.SetPaddockFilterState,
    (paddockFilterState: PaddockFilterState) => { return { type: ActionTypes.SetPaddockFilterState, paddockFilterState } }
);

export type AllActions = SetDataEditorDatatypeAction | SetStockControlIntervalAction | SetPaddockFilterStateAction;

export const actions = {
    setDataEditorDatatype,
    setStockControlInterval,
}
