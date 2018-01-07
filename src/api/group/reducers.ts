import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { Group } from "./classes";
import * as GroupActions from "./actions";

export type State = Group[];

const initialState: State = [
    new Group({name: "Sheep1", id: "SHEEP1"}),
    // new Group("Cows1"),
    // new Group("Bulls1")
];

export const groupReducer = (state: State = initialState, action: GroupActions.GroupAction): State => {
    switch (action.type) {
        case (getType(GroupActions.addGroup)):
            return state.concat([action.group]);
        case (getType(GroupActions.modifyGroup)):
            return state.map((group: Group) => { return (group.id == action.group.id ? action.group : group) });
        case (getType(GroupActions.deleteGroup)):
            return state.filter((group: Group) => group.id !== action.group.id);
        default:
            return state;
    }
}