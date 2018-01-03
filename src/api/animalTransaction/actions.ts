import { createAction } from "typesafe-actions";

import { AnimalTransaction } from "./classes";
import { Animal } from "../animal";

export enum ActionTypes {
    AddAnimalTransaction = "ADD_TRANSACTION",
    ModifyAnimalTransaction = "MODIFY_TRANSACTION",
    DeleteAnimalTransaction = "DELETE_TRANSACTION"
}

export interface AnimalTransactionAction {
    readonly type: ActionTypes,
    readonly transaction: AnimalTransaction
}

export const addAnimalTransaction = createAction(ActionTypes.AddAnimalTransaction,
    (transaction: AnimalTransaction) => {
        return (
            {
                type: ActionTypes.AddAnimalTransaction,
                transaction: transaction
            }
        )
    }
);

export const modifyAnimalTransaction = createAction(ActionTypes.ModifyAnimalTransaction,
    (transaction: AnimalTransaction) => {
        return (
            {
                type: ActionTypes.ModifyAnimalTransaction,
                transaction: transaction
            }
        )
    }
);

export const deleteAnimalTransaction = createAction(ActionTypes.DeleteAnimalTransaction,
    (transaction: AnimalTransaction) => {
        return (
            {
                type: ActionTypes.DeleteAnimalTransaction,
                transaction: transaction
            }
        )
    }
);

export const actions = {
    addAnimalTransaction,
    modifyAnimalTransaction,
    deleteAnimalTransaction,
}