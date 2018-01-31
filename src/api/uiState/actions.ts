import { createAction } from "typesafe-actions";
import * as Luxon from "luxon";

import { AllDatatypes } from "../datatypes";
import { datatypes } from "../index";
import {
    AnimalFilterState,
    AnimalTransactionFilterState,
    GroupFilterState,
    PaddockFilterState
} from "./reducers";
import { IdType } from "../common/index";

enum ActionTypes {
    SetDataEditorDatatype = "SET_DATA_EDITOR_DATATYPE",
    SetSelectedObjectId = "SET_SELECTED_OBJECT_ID",
    SetStockControlInterval = "SET_STOCK_CONTROL_INTERVAL",
    SetAnimalFilterState = "SET_ANIMAL_FILTER_STATE",
    SetAnimalTransactionFilterState = "SET_ANIMAL_TRANSACTION_FILTER_STATE",
    SetGroupFilterState = "SET_GROUP_FILTER_STATE",
    SetPaddockFilterState = "SET_PADDOCK_FILTER_STATE",
}

export interface SetDataEditorDatatypeAction {
    readonly type: ActionTypes.SetDataEditorDatatype,
    readonly datatype: AllDatatypes
}

export const setDataEditorDatatype = createAction(ActionTypes.SetDataEditorDatatype,
    (datatype: AllDatatypes) => { return { type: ActionTypes.SetDataEditorDatatype, datatype: datatype } }
);

export interface SetSelectedObjectIdAction {
    readonly type: ActionTypes.SetSelectedObjectId,
    readonly id: IdType
}

export const setSelectedObjectId = createAction(ActionTypes.SetSelectedObjectId,
    (id: IdType) => { return { type: ActionTypes.SetSelectedObjectId, id } }
);

export interface SetStockControlIntervalAction {
    readonly type: ActionTypes.SetStockControlInterval,
    readonly interval: Luxon.Interval;
}

export const setStockControlInterval = createAction(ActionTypes.SetStockControlInterval,
    (interval: Luxon.Interval) => { return { type: ActionTypes.SetStockControlInterval, interval } }
);

export interface SetAnimalFilterStateAction {
    readonly type: ActionTypes.SetAnimalFilterState,
    readonly animalFilterState: AnimalFilterState;
}

export const setAnimalFilterState = createAction(ActionTypes.SetAnimalFilterState,
    (animalFilterState: AnimalFilterState) => { return { type: ActionTypes.SetAnimalFilterState, animalFilterState } }
);

export interface SetAnimalTransactionFilterStateAction {
    readonly type: ActionTypes.SetAnimalTransactionFilterState,
    readonly animalTransactionFilterState: AnimalTransactionFilterState;
}

export const setAnimalTransactionFilterState = createAction(ActionTypes.SetAnimalTransactionFilterState,
    (animalTransactionFilterState: AnimalTransactionFilterState) => { return { type: ActionTypes.SetAnimalTransactionFilterState, animalTransactionFilterState } }
);

export interface SetGroupFilterStateAction {
    readonly type: ActionTypes.SetGroupFilterState,
    readonly groupFilterState: GroupFilterState;
}

export const setGroupFilterState = createAction(ActionTypes.SetGroupFilterState,
    (groupFilterState: GroupFilterState) => { return { type: ActionTypes.SetGroupFilterState, groupFilterState } }
);

export interface SetPaddockFilterStateAction {
    readonly type: ActionTypes.SetPaddockFilterState,
    readonly paddockFilterState: PaddockFilterState;
}

export const setPaddockFilterState = createAction(ActionTypes.SetPaddockFilterState,
    (paddockFilterState: AnimalFilterState) => { return { type: ActionTypes.SetPaddockFilterState, paddockFilterState } }
);

export type AllActions =
    SetDataEditorDatatypeAction |
    SetSelectedObjectIdAction |
    SetStockControlIntervalAction |
    SetAnimalFilterStateAction |
    SetAnimalTransactionFilterStateAction |
    SetGroupFilterStateAction |
    SetPaddockFilterStateAction
    ;

export const uiActions = {
    setDataEditorDatatype,
    setSelectedObjectId,
    setStockControlInterval,
    setAnimalFilterState,
    setAnimalTransactionFilterState,
    setGroupFilterState,
    setPaddockFilterState,
}
