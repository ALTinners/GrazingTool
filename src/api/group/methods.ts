import * as Luxon from "luxon";

import {
    Animal,
    AnimalTransaction,
    AnimalTransactionPair,
    Group,
    GroupValues,
    GroupDatedValues
} from "../";

export const calculateValuesForInterval =
    (
        animals: Animal[],
        transactions: AnimalTransaction[],
        interval: Luxon.Interval
    ): GroupDatedValues[] => {
        let values: GroupDatedValues[] = [];

        let dailyValue: GroupValues = { headCount: 0, requirement: 0, value: 0 };

        let date = interval.start;
        if (transactions.length > 0 && transactions[0].date < date) {
            date = transactions[0].date;
        } 
        while (!date.hasSame(interval.end, "day")) {
            let filteredTransactions: AnimalTransaction[] = transactions.filter(
                (transaction: AnimalTransaction) => {
                    return transaction.date.hasSame(date, "day");
                });

            let filteredTransactionPairs: AnimalTransactionPair[] = filteredTransactions.map((transaction) => {
                let animal: Animal[] = animals.filter(animal => animal.id == transaction.animalId);
                if (animal.length === 1) {
                    dailyValue = applyTransaction(transaction, animal[0], dailyValue);
                    return ({ transaction: transaction, animal: animal[0] });
                } else {
                    console.log("Something wrong with animals");
                    return { transaction: transaction, animal: undefined };
                }
            })
            values.push(new GroupDatedValues({
                dateString: date.toLocaleString(), 
                headCount: dailyValue.headCount,
                requirement: dailyValue.requirement, 
                value:dailyValue.value, 
                transactions: filteredTransactionPairs
            }));
            date = date.plus({ days: 1 });
        }

        return values;
    }

export const applyTransaction = (transaction: AnimalTransaction, animal: Animal, previousValues: GroupValues) => {
    return {
        headCount: previousValues.headCount + transaction.headCount,
        requirement: previousValues.requirement + (transaction.headCount * animal.requirement),
        value: previousValues.value + (transaction.headCount * animal.value)
    }
} 