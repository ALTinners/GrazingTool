import { createAction } from "typesafe-actions";

import { Group } from "./classes";

export enum ActionTypes {
    AddGroup = "ADD_GROUP",
    ModifyGroup = "MODIFY_GROUP",
    DeleteGroup = "DELETE_GROUP"
}

export interface GroupAction {
    readonly type: ActionTypes,
    readonly group: Group
}

export const addGroup = createAction(ActionTypes.AddGroup,
    (group: Group) => {
        return (
            {
                type: ActionTypes.AddGroup,
                group,
            }
        )
    }
);

export const modifyGroup = createAction(ActionTypes.ModifyGroup,
    (group: Group) => {
        return (
            {
                type: ActionTypes.ModifyGroup,
                group,
            }
        )
    }
);

export const deleteGroup = createAction(ActionTypes.DeleteGroup,
    (group: Group) => {
        return (
            {
                type: ActionTypes.DeleteGroup,
                group,
            }
        )
    }
);

export const groupActions = {
    addGroup,
    modifyGroup,
    deleteGroup,
}