import { Dispatch } from "redux";

import { State as AnimalState } from "./animal";
import { State as TransactionState } from "./animalTransaction";
import { State as GroupState } from "./group";
import { State as PaddockState } from "./paddock";
import { State as FeedRecordState } from "./feedRecord";
import { State as MovementState } from "./movement";
import { State as AllocationState } from "./allocation";
import { State as UiState } from "./uiState"

export interface AppState {
    animals: AnimalState;
    transactions: TransactionState;
    groups: GroupState;
    paddocks: PaddockState;
    feedRecords: FeedRecordState;
    movements: MovementState;
    allocations: AllocationState;
    uiState: UiState;
}