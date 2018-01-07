import {
    AppState,
    IdType
} from "../"

export const getStockControlInterval = (state: AppState) => state.uiState.stockControlInterval;
export const getPaddockFilterState = (state: AppState) => state.uiState.paddockFilterState;
