import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";

import {
    AppState,
    Animal,
    AnimalTransaction,
    Group,
    Paddock,
    actions,
    AllDatatypes,
    datatypes,
    displayableDatatypes,
    PaddockFilterState,
    IdType
} from "../api";

import {
    AnimalCard,
    GroupCard,
    AnimalTransactionCard
} from "./dataCards";
import { DataEditorDatatypeCard } from "./DataEditorDatatypeCard";
import { AnimalTransactionCardInternal } from "./dataCards/AnimalTransactionCard";
import { PaddockDataFilter } from "./dataFilters/PaddockDataFilter"

import "./App.scss";

interface DataEditorProps {

}

interface ReduxStateProps {
    animals: Animal[];
    groups: Group[];
    paddocks: Paddock[];
    transactions: AnimalTransaction[];
    selectedDatatype: AllDatatypes;
    paddockFilterState: PaddockFilterState;
}

interface ReduxDispatchProps {
    setDatatype: (data: AllDatatypes) => void;
    setSelectedObjectId: (id: IdType) => void;
    setAnimal: (data: Animal) => void;
    setAnimalTransaction: (data: AnimalTransaction) => void;
    setGroup: (data: Group) => void;
    setPaddockFilterState: (data: PaddockFilterState) => void;
}

type Props = DataEditorProps & ReduxStateProps & ReduxDispatchProps;

class DataEditorInternal extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="content-container">
                <div className="datatype-list-container">
                    <div className="column-list">
                        {this.renderDisplayableDatatypes()}
                    </div>
                </div>
                <div className="column-list-container">
                    <div className="column-list">
                        {this.renderFilter()}
                        {this.renderSelectedDatatypes()}
                    </div>
                </div>
            </div>
        );
    }

    renderFilter = (): JSX.Element | null => {
        switch (this.props.selectedDatatype) {
            case (datatypes.PaddockDatatypes.Paddock): return (
                    <PaddockDataFilter
                        filter={this.props.paddockFilterState}
                        setFilter={this.props.setPaddockFilterState}
                    />
                );
            default: return (
                null
            );
        }
    }

    renderDisplayableDatatypes = (): JSX.Element[] => {
        return displayableDatatypes.map(
            (datatype: AllDatatypes) => {
                return (
                    <DataEditorDatatypeCard
                        key={datatype}
                        datatype={datatype}
                        setDatatype={this.props.setDatatype}
                    />
                );
            }
        );
    }

    renderSelectedDatatypes = (): JSX.Element[] => {
        switch (this.props.selectedDatatype) {
            case datatypes.AnimalDatatypes.Animal:
                return this.renderAnimalCards();
            case datatypes.GroupDatatypes.Group:
                return this.renderGroupCards();
            case datatypes.AnimalTransactionDatatypes.AnimalTransaction:
                return this.renderAnimalTransactionCards();
            default:
                return [];
        }
    }

    renderAnimalCards = (): JSX.Element[] => {
        return this.props.animals.map(
            (animal: Animal) => {
                return (
                    <AnimalCard
                        key={animal.id}
                        label={animal.name}
                        id={animal.id}
                        setSelectedId={ () => this.props.setSelectedObjectId(animal.id) }
                        animal={animal}
                        setAnimal={this.props.setAnimal}
                    />
                )
            });
    }

    renderGroupCards = (): JSX.Element[] => {
        return this.props.groups.map(
            (group: Group) => {
                return (
                    <GroupCard
                        key={group.name}
                        label={group.name}
                        id={group.id}
                        setSelectedId={ () => this.props.setSelectedObjectId(group.id) }
                        group={group}
                        setGroup={this.props.setGroup}
                    />
                )
            });
    }

    renderAnimalTransactionCards = (): JSX.Element[] => {
        return this.props.transactions.map(
            (transaction) => {
                return (
                    <AnimalTransactionCard
                        key={transaction.id}
                        label={transaction.name}
                        id={transaction.id}
                        setSelectedId={ () => this.props.setSelectedObjectId(transaction.id) }
                        animals={this.props.animals}
                        groups={this.props.groups}
                        animalTransaction={transaction}
                        setAnimalTransaction={this.props.setAnimalTransaction}
                    />
                )
            });
    }
}

const mapStateToProps = (state: AppState): ReduxStateProps => {
    return {
        animals: state.animals,
        groups: state.groups,
        paddocks: state.paddocks,
        transactions: state.animalTransactions,
        selectedDatatype: state.uiState.dataEditorDatatype,
        paddockFilterState: state.uiState.paddockFilterState,
    };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>): ReduxDispatchProps => {
    return {
        setDatatype: (datatype: AllDatatypes) => {
            dispatch(actions.uiActions.setDataEditorDatatype(datatype));
        },
        setSelectedObjectId: (id: IdType) => {
            dispatch(actions.uiActions.setSelectedObjectId(id));
        },
        setAnimal: (animal: Animal) => {
            dispatch(actions.animalActions.modifyAnimal(animal))
        },
        setAnimalTransaction: (transaction: AnimalTransaction) => {
            dispatch(actions.animalTransactionActions.modifyAnimalTransaction(transaction))
        },
        setGroup: (group: Group) => {
            dispatch(actions.groupActions.modifyGroup(group))
        },
        setPaddockFilterState: (filter: PaddockFilterState) => {
            dispatch(actions.uiActions.setPaddockFilterState(filter))
        }
    };
}

export const DataEditor = connect(mapStateToProps, mapDispatchToProps)(DataEditorInternal);