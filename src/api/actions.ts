import { actions as animalActions } from "./animal";
import { actions as animalTransactionActions } from "./animalTransaction"
import { actions as groupActions } from "./group";
import { Actions as paddockActions } from "./paddock";
import { actions as feedRecordActions } from "./feedRecord";
import { actions as movementActions } from "./movement";
import { actions as allocationActions } from "./allocation";
import { actions as uiActions } from "./uiState";

export const actions = {
    animalActions,
    groupActions,
    animalTransactionActions,
    paddockActions,
    feedRecordActions,
    movementActions,
    allocationActions,
    uiActions
}