import * as Luxon from "luxon";
import { createSelector } from 'reselect';

import {
    AppState,
    IdType,
    Animal,
    AnimalTransaction,
    Group,
    GroupDatedValues,
    calculateValuesForInterval
} from "../"
import { getAnimals } from "../animal";
import { GetTransactionsOptions, getTransactions } from "../animalTransaction";
import { getStockControlInterval, } from "../uiState";

export const getGroups = (state: AppState) => state.animals;
export const getGroupForId = (state: AppState, id: IdType): Group | undefined => state.groups.find((group: Group) => group.id === id);

interface GetGroupValuesForSpanOptions extends GetTransactionsOptions {
    groupId: IdType;
}

const getGroupId = (state: AppState, options: GetGroupValuesForSpanOptions): IdType => options.groupId;

export const getGroupValuesForSpan = createSelector(
    [getAnimals, getTransactions, getGroupId, getStockControlInterval],
    (animals: Animal[], transactions: AnimalTransaction[], groupId: IdType, interval: Luxon.Interval): GroupDatedValues[] => {
        return calculateValuesForInterval(animals, transactions, interval);
    }
)