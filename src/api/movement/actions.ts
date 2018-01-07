import { createAction } from "typesafe-actions";
import { Movement } from "./classes";

export enum ActionTypes {
    AddMovement = "ADD_MOVEMENT",
    ModifyMovement = "MODIFY_MOVEMENT",
    DeleteMovement = "DELETE_MOVEMENT",
}

export interface MovementAction {
    readonly type: ActionTypes,
    readonly movement: Movement
}

export const addMovement = createAction(ActionTypes.AddMovement,
    (movement: Movement) => { return { type: ActionTypes.AddMovement, movement } }
);

export const modifyMovement = createAction(ActionTypes.ModifyMovement,
    (movement: Movement) => { return { type: ActionTypes.ModifyMovement, movement } }
);

export const deleteMovement = createAction(ActionTypes.DeleteMovement,
    (movement: Movement) => { return { type: ActionTypes.DeleteMovement, movement } }
);

export const movementActions = {
    addMovement,
    modifyMovement,
    deleteMovement,
}