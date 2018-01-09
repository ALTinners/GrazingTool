import * as Luxon from "luxon";

import { 
    AppState, 
    IdType,
    AnimalTransaction, 
    filterForId,
    sortByDate
} from "../"
import { filterForDates, DateFilterOptions } from "../common";

export interface GetTransactionsOptions extends DateFilterOptions {
    animalId?: IdType;
    groupId?: IdType;
    grouping?: number;
    tags?: string[];
}

export const getTransactions = (state: AppState, options?: GetTransactionsOptions): AnimalTransaction[] => {
    let transactions = state.animalTransactions;
    if (options) {
        if (options.animalId) {
            transactions = filterForId(transactions, "animalId", options.animalId);
        }
        if (options.groupId) {
            transactions = filterForId(transactions, "groupId", options.groupId);
        }
        if (options.within || options.before || options.after) {
            transactions = filterForDates(transactions, options);
        }
    }

    return sortByDate(transactions);
}
export const getTransactionForId = (state: AppState, id: IdType): AnimalTransaction | undefined => state.animalTransactions.find((transaction: AnimalTransaction) => transaction.id === id); 