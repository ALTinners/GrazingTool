import * as React from "react";

import { LuxonDayPicker } from "../wrapped/LuxonDayPicker";
import { IdObjectPicker } from "../wrapped/IdObjectPicker";
import * as Luxon from "luxon";


import {
    AppState,
    IdType,
    Animal,
    Group,
    Paddock,
    AnimalTransaction,
    actions,
    findItemForId,
    itemsAsReactSelectData
} from "../../api";

import "react-select/scss/default.scss";
import "react-day-picker/lib/style.css";

interface AnimalTransactionFormProps {
    animals: Animal[];
    groups: Group[];
    transaction: AnimalTransaction;
    setGroupId: (animalId: IdType) => void;
    setAnimalId: (animalId: IdType) => void;
    setQuantity: (quantity: number) => void;
    setDate: (date: Luxon.DateTime) => void;
}

type Props = AnimalTransactionFormProps;

export const AnimalTransactionForm: React.SFC<AnimalTransactionFormProps> = (props) => {
    return (
        <div className="dialog-inputs-column">
            <IdObjectPicker
                objects={props.groups}
                selectedId={props.transaction.groupId}
                onSelect={props.setGroupId}
            />
            <IdObjectPicker
                objects={props.animals}
                selectedId={props.transaction.animalId}
                onSelect={props.setAnimalId}
            />
            <input
                type="number"
                value={props.transaction.count}
                onChange={ (e) => props.setQuantity(parseFloat(e.currentTarget.value)) }
            />
            <LuxonDayPicker
                date={props.transaction.date}
                onDayClick={props.setDate}
            />
        </div>
    )
}