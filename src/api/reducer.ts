import { Reducer, Dispatch, combineReducers } from "redux";

import { AppState } from "./state";
import { animalReducer as animals } from "./animal";
import { animalTransactionReducer as animalTransactions } from "./animalTransaction";
import { groupReducer as groups } from "./group";
import { paddockReducer as paddocks } from "./paddock";
import { feedRecordReducer as feedRecords } from "./feedRecord";
import { movementReducer as movements } from "./movement";
import { allocationReducer as allocations } from "./allocation";
import { uiStateReducer as uiState } from "./uiState";


export const reducer: Reducer<AppState> = combineReducers<AppState>(
    {
        animals,
        animalTransactions,
        groups,
        paddocks,
        feedRecords,
        movements,
        allocations,
        uiState,
    }
);

export { PaddockFilterState } from "./uiState";