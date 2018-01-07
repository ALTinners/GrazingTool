import { createAction } from "typesafe-actions";
import { Allocation } from "./classes";

export enum ActionTypes {
    AddAllocation = "ADD_ALLOCATION",
    ModifyAllocation = "MODIFY_ALLOCATION",
    DeleteAllocation = "DELETE_ALLOCATION",
}

export interface AllocationAction {
    readonly type: ActionTypes,
    readonly allocation: Allocation
}

export const addAllocation = createAction(ActionTypes.AddAllocation,
    (allocation: Allocation) => { return { type: ActionTypes.AddAllocation, allocation } }
);

export const modifyAllocation = createAction(ActionTypes.ModifyAllocation,
    (allocation: Allocation) => { return { type: ActionTypes.ModifyAllocation, allocation } }
);

export const deleteAllocation = createAction(ActionTypes.DeleteAllocation,
    (allocation: Allocation) => { return { type: ActionTypes.DeleteAllocation, allocation } }
);

export const allocationActions = {
    addAllocation,
    modifyAllocation,
    deleteAllocation,
}