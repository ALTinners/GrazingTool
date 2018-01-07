import * as React from "react";
import * as Luxon from "luxon";

import { makeDataCard, DataCardProps } from "./DataCard";
import { AnimalTransactionForm } from "../forms/AnimalTransactionForm"
import {
    IdType,
    Animal,
    Group,
    AnimalTransaction
} from "../../api";

interface AnimalTransactionCardState {
    animalTransaction: AnimalTransaction;
}

interface AnimalTransactionCardProps {
    animals: Animal[];
    groups: Group[];
    animalTransaction: AnimalTransaction;
    setAnimalTransaction: (animalTransaction: AnimalTransaction) => void;
}

type Props = AnimalTransactionCardProps & DataCardProps;

export class AnimalTransactionCardInternal extends React.Component<Props, AnimalTransactionCardState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            animalTransaction: this.props.animalTransaction
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        this.updateStateAnimalTransaction(nextProps.animalTransaction);
    }

    setAnimalId = (id: IdType) => {
        this.updateStateAnimalTransaction(this.state.animalTransaction.set("animalId", id));
    }

    setGroupId = (id: IdType) => {
        this.updateStateAnimalTransaction(this.state.animalTransaction.set("groupId", id));
    }

    setCount = (number: number) => {
        this.updateStateAnimalTransaction(this.state.animalTransaction.set("headCount", number));
    }

    setDate = (date: Luxon.DateTime) => {
        this.updateStateAnimalTransaction(this.state.animalTransaction.set("date", date));
    }

    updateStateAnimalTransaction = (animalTransaction: AnimalTransaction, updateValidity: boolean = false) => {
        this.setState(
            { animalTransaction },
            () => {
                if (updateValidity) {
                    // this.props.setValid(this.state.animalTransaction.isValid()) 
                }
            }
        );
    }

    setAnimalTransaction = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (this.state.animalTransaction.isValid()) {
            this.props.setAnimalTransaction(this.state.animalTransaction);
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <AnimalTransactionForm
                    animals={this.props.animals}
                    groups={this.props.groups}
                    transaction={this.state.animalTransaction}
                    setAnimalId={this.setAnimalId}
                    setGroupId={this.setGroupId}
                    setQuantity={this.setCount}
                    setDate={this.setDate}
                />
                {this.renderOkButton()}
            </div>
        );
    }

    renderOkButton(): JSX.Element | null {
        if (this.state.animalTransaction &&
            this.state.animalTransaction.isValid() &&
            !this.state.animalTransaction.equals(this.props.animalTransaction)) {
            return (
                <button onClick={this.setAnimalTransaction}>
                    OK
                </button>
            );
        } else {
            return null;
        }
    }
}

export const AnimalTransactionCard = makeDataCard()(AnimalTransactionCardInternal); 
