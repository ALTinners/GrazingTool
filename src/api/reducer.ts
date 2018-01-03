import { Reducer, Dispatch, combineReducers } from "redux";

import { AppState } from "./state";
import { Animal, reducer as animals } from "./animal";
import { reducer as transactions } from "./animalTransaction";
import { Group, reducer as groups } from "./group";
import { Paddock, reducer as paddocks } from "./paddock";
import { reducer as uiState } from "./uiState";


export const reducer: Reducer<AppState> = combineReducers<AppState>(
    {
        animals,
        transactions,
        groups,
        paddocks,
        uiState
    }
);