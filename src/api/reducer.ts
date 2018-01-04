import { Reducer, Dispatch, combineReducers } from "redux";

import { AppState } from "./state";
import { reducer as animals } from "./animal";
import { reducer as transactions } from "./animalTransaction";
import { reducer as groups } from "./group";
import { reducer as paddocks } from "./paddock";
import { reducer as feedRecords } from "./feedRecord";
import { reducer as movements } from "./movement";
import { reducer as uiState } from "./uiState";


export const reducer: Reducer<AppState> = combineReducers<AppState>(
    {
        animals,
        transactions,
        groups,
        paddocks,
        feedRecords,
        movements,
        uiState,
    }
);