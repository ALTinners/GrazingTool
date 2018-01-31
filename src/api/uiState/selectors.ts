import {
    AppState,
    IdType
} from "../"

export const getStockControlInterval = (state: AppState) => state.uiState.stockControlInterval;
export const getSelectedObjectId = (state: AppState) => state.uiState.selectedObjectId;
export const getPaddockFilterState = (state: AppState) => state.uiState.paddockFilterState;
