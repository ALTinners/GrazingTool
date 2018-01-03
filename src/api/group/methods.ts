import * as Luxon from "luxon";

import {
    Animal,
    AnimalTransaction,
    AnimalTransactionPair,
    Group,
    GroupValues,
    GroupDatedValues
} from "../";

export const calculateValuesForSpan =
    (
        animals: Animal[],
        transactions: AnimalTransaction[],
        group: Group,
        startDate: Luxon.DateTime,
        endDate: Luxon.DateTime
    ): GroupDatedValues[] => {
        let values: GroupDatedValues[] = [];

        let dailyValue: GroupValues = { count: 0, requirement: 0, value: 0 };

        let date = (transactions.length > 1 ? transactions[0].date : startDate);
        while (!date.hasSame(endDate, "day")) {
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
            values.push(new GroupDatedValues(date, dailyValue.count, dailyValue.requirement, dailyValue.value, filteredTransactionPairs));
            date = date.plus({ days: 1 });
        }
        console.log(values);

        return values;
    }

export const applyTransaction = (transaction: AnimalTransaction, animal: Animal, previousValues: GroupValues) => {
    return {
        count: previousValues.count + transaction.count,
        requirement: previousValues.requirement + (transaction.count * animal.requirement),
        value: previousValues.value + (transaction.count * animal.value)
    }
} 