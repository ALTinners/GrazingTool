import { createAction } from "typesafe-actions";
import { Animal } from "./classes";

export enum ActionTypes {
    AddAnimal = "ADD_ANIMAL",
    ModifyAnimal = "MODIFY_ANIMAL",
    DeleteAnimal = "DELETE_ANIMAL",
}

export interface AnimalAction {
    readonly type: ActionTypes,
    readonly animal: Animal
}

export const addAnimal = createAction(ActionTypes.AddAnimal,
    (animal: Animal) => { return { type: ActionTypes.AddAnimal, animal: animal } }
);

export const modifyAnimal = createAction(ActionTypes.ModifyAnimal,
    (animal: Animal) => { return { type: ActionTypes.ModifyAnimal, animal: animal } }
);

export const deleteAnimal = createAction(ActionTypes.DeleteAnimal,
    (animal: Animal) => { return { type: ActionTypes.DeleteAnimal, animal: animal } }
);

export const animalActions = {
    addAnimal,
    modifyAnimal,
    deleteAnimal,
}