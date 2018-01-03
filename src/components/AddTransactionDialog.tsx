import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import * as ReactSelect from "react-select";
import DayPicker from "react-day-picker";
import * as Luxon from "luxon";

import { GroupCalendarRow } from "./GroupCalendarRowContainer";
import { makeOverlay, OverlayProps } from "./Overlay";

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
} from "../api";


import "./App.scss";
import "react-select/scss/default.scss";
import "react-day-picker/lib/style.css";

interface AddTransactionDialogProps {

}

interface ReduxStateProps {
    animals: Animal[];
    groups: Group[];
}

interface ReduxDispatchProps {
    addTransaction: (transaction: AnimalTransaction) => void;
}

type Props = AddTransactionDialogProps & ReduxStateProps & ReduxDispatchProps & OverlayProps;

interface AddTransactionDialogState {
    selectedGroup: Group | undefined;
    selectedAnimal: Animal | undefined;
    quantity: number | undefined;
    date: Luxon.DateTime | undefined;
}

class AddTransactionDialogInternal extends React.Component<Props, AddTransactionDialogState> {

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedGroup: undefined,
            selectedAnimal: undefined,
            quantity: undefined,
            date: undefined,
        };
    }

    handleClicks = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    }

    isTransactionDefined = (): boolean => {
        return (this.state.selectedGroup !== undefined &&
            this.state.selectedAnimal !== undefined &&
            this.state.date !== undefined &&
            this.state.quantity !== undefined);
    }

    setGroup = (newValue: ReactSelect.Option<IdType> | null) => {
        let id: IdType | undefined = (newValue !== null ? newValue.value : undefined);
        this.setState({
            selectedGroup: findItemForId(this.props.groups, id)
        });
    }

    setAnimal = (newValue: ReactSelect.Option<IdType> | null) => {
        let id: IdType | undefined = (newValue !== null ? newValue.value : undefined);
        this.setState({
            selectedAnimal: findItemForId(this.props.animals, id)
        });
    }

    setQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        let intVal = parseInt(e.currentTarget.value, 10);
        this.setState({
            quantity: (intVal !== NaN ? intVal : undefined)
        });
    }

    setDate = (day: Date) => {
        this.setState({
            date: Luxon.DateTime.fromJSDate(day)
        });
    }

    evaluateGroupWithInputs(): Group | undefined {
        if (!this.isTransactionDefined()) {
            return undefined;
        }

        let newGroup: Group = this.state.selectedGroup!.clone();
        let selectedAnimal: Animal = this.state.selectedAnimal!.clone();
        let newTransaction = new AnimalTransaction(selectedAnimal!.id, newGroup!.id, this.state.quantity!, this.state.date!);
        // return newGroup.addTransaction(newTransaction);
    }

    saveAndClose = () => {
        if (!this.isTransactionDefined()) {
            return;
        }

        this.props.addTransaction(
            new AnimalTransaction(
                this.state.selectedAnimal!.id,
                this.state.selectedGroup!.id,
                this.state.quantity!,
                this.state.date!
            )
        );

        this.props.exitDialog();
    }

    render(): JSX.Element {
        let jsDate: Date = new Date();
        if (this.state.date) {
            jsDate = this.state.date.toJSDate();
        }

        let selectedGroupId: IdType | undefined;
        if (this.state.selectedGroup) {
            selectedGroupId = this.state.selectedGroup.id
        }

        let selectedAnimalId: IdType | undefined;
        if (this.state.selectedAnimal) {
            selectedAnimalId = this.state.selectedAnimal.id
        }

        return (
            <div className="dialog-center-content" onClick={this.handleClicks}>
                <div className="dialog-inputs-column">
                    <h2>Add Transaction</h2>
                    <ReactSelect.Creatable
                        className="item-selector"
                        options={itemsAsReactSelectData(this.props.groups)}
                        value={selectedGroupId}
                        onChange={this.setGroup}
                    />
                    <ReactSelect.Creatable
                        className="item-selector"
                        options={itemsAsReactSelectData(this.props.animals)}
                        value={selectedAnimalId}
                        onChange={this.setAnimal}
                    />
                    <input
                        type="number"
                        value={this.state.quantity!}
                        onChange={this.setQuantity}
                    />
                    <DayPicker
                        selectedDays={jsDate}
                        onDayClick={this.setDate}
                    />
                </div>
                <div className={"dialog-outputs-column"}>
                    {this.renderAppliedTransaction()}
                </div>
            </div>
        );
    }

    renderAppliedTransaction(): JSX.Element | null {
        let group: Group | undefined = this.evaluateGroupWithInputs();
        if (group) {
            group = group as Group;
            console.log(group);
            return (
                <div>
                    {group.name}
                    <GroupCalendarRow
                        group={group}
                    />
                    <button onClick={this.saveAndClose}>
                        OK
                </button>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state: AppState): ReduxStateProps => {
    return {
        animals: state.animals,
        groups: state.groups
    };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>): ReduxDispatchProps => {
    return {
        addTransaction: (transaction: AnimalTransaction) => {
            dispatch(actions.animalTransactionActions.addAnimalTransaction(transaction))
        }
    };
}

export const AddTransactionDialog = connect(mapStateToProps, mapDispatchToProps)(makeOverlay()(AddTransactionDialogInternal));