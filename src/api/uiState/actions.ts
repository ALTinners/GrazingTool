import { createAction } from "typesafe-actions";
import * as Luxon from "luxon";

import { AllDatatypes } from "../datatypes";
import { datatypes } from "../index";

enum ActionTypes {
    SetDataEditorDatatype = "SET_DATA_EDITOR_DATATYPE",
    SetStockControlStartDate = "SET_STOCK_CONTROL_START_DATE",
    SetStockControlEndDate = "SET_STOCK_CONTROL_END_DATE",
}

export interface SetDataEditorDatatypeAction {
    readonly type: ActionTypes.SetDataEditorDatatype,
    readonly datatype: AllDatatypes
} 

export const setDataEditorDatatype = createAction(ActionTypes.SetDataEditorDatatype,
    (datatype: AllDatatypes) => { return { type: ActionTypes.SetDataEditorDatatype, datatype: datatype } }
);

export interface SetStockControlStartDateAction {
    readonly type: ActionTypes.SetStockControlStartDate,
    readonly date: Luxon.DateTime;
}

export const setStockControlStartDate = createAction(ActionTypes.SetStockControlStartDate,
    (date: Luxon.DateTime) => { return { type: ActionTypes.SetStockControlStartDate, date: date } }
);

export interface SetStockControlEndDateAction {
    readonly type: ActionTypes.SetStockControlEndDate,
    readonly date: Luxon.DateTime;
}

export const setStockControlEndDate = createAction(ActionTypes.SetStockControlEndDate,
    (date: Luxon.DateTime) => { return { type: ActionTypes.SetStockControlEndDate, date: date } }
);

export type AllActions = SetDataEditorDatatypeAction | SetStockControlStartDateAction | SetStockControlEndDateAction;

export const actions = {
    setDataEditorDatatype,
    setStockControlStartDate,
    setStockControlEndDate
}
