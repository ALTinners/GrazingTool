import { animalActions } from "./animal";
import { animalTransactionActions } from "./animalTransaction"
import { groupActions } from "./group";
import { feedRecordActions } from "./feedRecord";
import { movementActions } from "./movement";
import { allocationActions } from "./allocation";
import { uiActions } from "./uiState";

export const actions = {
    animalActions,
    groupActions,
    animalTransactionActions,
    feedRecordActions,
    movementActions,
    allocationActions,
    uiActions
}