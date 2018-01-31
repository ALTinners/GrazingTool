import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";
import * as Luxon from "luxon";

import * as Actions from "./actions";
import { IdType, AllDatatypes } from "../";

export interface BaseFilterState {
    name: string;
}

export interface DatedFilterState extends BaseFilterState {
    lowerDate: Luxon.DateTime | undefined;
    upperDate: Luxon.DateTime | undefined;
}

export interface AnimalFilterState extends BaseFilterState  {

}

export interface AnimalTransactionFilterState extends DatedFilterState  {

}

export interface GroupFilterState extends BaseFilterState  {

}

export interface PaddockFilterState extends BaseFilterState {

}

export type State = {
    dataEditorDatatype: AllDatatypes;
    selectedObjectId: IdType | undefined,
    stockControlInterval: Luxon.Interval;
    animalFilterState: AnimalFilterState;
    animalTransactionFilterState: AnimalTransactionFilterState;
    groupFilterState: GroupFilterState;
    paddockFilterState: PaddockFilterState;
}

const initialState: State = {
    dataEditorDatatype: undefined,
    selectedObjectId: undefined,
    stockControlInterval: Luxon.Interval.fromDateTimes(Luxon.DateTime.fromJSDate(new Date()), Luxon.DateTime.fromJSDate(new Date()).plus({ days: 90 })),
    animalFilterState: {
        name: ""
    },
    animalTransactionFilterState: {
        name: "",
        lowerDate: undefined,
        upperDate: undefined
    },
    groupFilterState: {
        name: ""
    },
    paddockFilterState: {
        name: ""
    },
};

export const uiStateReducer = (state: State = initialState, action: Actions.AllActions): State => {
    switch (action.type) {
        case (getType(Actions.setDataEditorDatatype)):
            return {
                ...state,
                dataEditorDatatype: action.datatype,
                selectedObjectId: undefined
            }
        case (getType(Actions.setSelectedObjectId)):
            return {
                ...state,
                selectedObjectId: action.id
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