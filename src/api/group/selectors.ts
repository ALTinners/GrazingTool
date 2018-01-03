import * as Luxon from "luxon";
import { createSelector } from 'reselect';

import { Animal, AnimalTransaction, Group, GroupDatedValues, calculateValuesForSpan } from "../"
import { AppState } from '../state';

const getAnimals = (state: AppState) => state.animals;
const getTransactions = (state: AppState) => state.transactions;
const getGroup = (state: AppState, group: Group): Group => group;
const getStockControlStartDate = (state: AppState) => state.uiState.stockControlStartDate;
const getStockControlEndDate = (state: AppState) => state.uiState.stockControlEndDate;

export const getGroupValuesForSpan = createSelector(
    [getAnimals, getTransactions, getGroup, getStockControlStartDate, getStockControlEndDate],
    (animals: Animal[], transactions: AnimalTransaction[], group: Group, startDate: Luxon.DateTime, endDate: Luxon.DateTime): GroupDatedValues[] => {
        let groupTransactions = transactions.filter(
            (transaction) => (transaction.groupId == group.id && transaction.date <= endDate)
        );
        return calculateValuesForSpan(animals, groupTransactions, group, startDate, endDate);
    }
)