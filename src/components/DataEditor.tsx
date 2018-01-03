import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";

import {
    AppState,
    Animal,
    Group,
    Paddock,
    actions,
    AllDatatypes,
    datatypes,
    displayableDatatypes,
} from "../api";

import { AnimalCard, GroupCard } from "./dataCards";
import { DataEditorDatatypeCard } from "./DataEditorDatatypeCard";
import "./App.scss";

interface DataEditorProps {

}

interface ReduxStateProps {
    animals: Animal[];
    groups: Group[];
    paddocks: Paddock[];
    selectedDatatype: AllDatatypes;
}

interface ReduxDispatchProps {
    setDatatype: (data: AllDatatypes) => void;
    setAnimal: (data: Animal) => void;
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
                        {this.renderSelectedDatatypes()}
                    </div>
                </div>
            </div>
        );
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
                        group={group}
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
        selectedDatatype: state.uiState.dataEditorDatatype
    };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>): ReduxDispatchProps => {
    return {
        setDatatype: (datatype: AllDatatypes) => {
            dispatch(actions.uiActions.setDataEditorDatatype(datatype));
        },
        setAnimal: (animal: Animal) => {
            dispatch(actions.animalActions.modifyAnimal(animal))
        },
    };
}

export const DataEditor = connect(mapStateToProps, mapDispatchToProps)(DataEditorInternal);