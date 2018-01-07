import * as React from "react";

import { makeDataCard, DataCardProps } from "./DataCard";
import { Animal } from "../../api";

interface AnimalCardState {
    animal: Animal;
}

interface AnimalCardProps {
    animal: Animal;
    setAnimal: (animal: Animal) => void;
}

type Props = AnimalCardProps & DataCardProps;

export class AnimalCardInternal extends React.Component<Props, AnimalCardState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            animal: this.props.animal
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        this.updateStateAnimal(nextProps.animal);
    }

    setName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.updateStateAnimal(this.state.animal.set("name", e.currentTarget.value));
    }

    setRequirement = (e: React.ChangeEvent<HTMLInputElement>) => {
        let number: number = parseFloat(e.currentTarget.value);
        this.updateStateAnimal(this.state.animal.set("requirement", number));
    }

    setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let number: number = parseFloat(e.currentTarget.value);
        this.updateStateAnimal(this.state.animal.set("value", number));
    }

    updateStateAnimal = (animal: Animal) => {
        this.setState({
            animal: animal
        })
    }

    setAnimal = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (this.state.animal.isValid()) {
            this.props.setAnimal(this.state.animal);
        }
    }

    render(): JSX.Element {
        let isValid = this.state.animal.isValid();
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="string"
                                value={this.state.animal.name}
                                onChange={this.setName}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="number"
                                value={isNaN(this.state.animal.requirement) ? undefined : this.state.animal.requirement}
                                onChange={this.setRequirement}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type=" number"
                                value={this.state.animal.value}
                                onChange={this.setValue}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button
                                onClick={this.setAnimal}
                                disabled={!isValid}
                            >OK</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export const AnimalCard = makeDataCard()(AnimalCardInternal); 
