import * as React from "react";

import { makeDataCard, DataCardProps } from "./DataCard";
import { Group, actions } from "../../api";

interface GroupCardState {
    group: Group;
}

interface GroupCardProps {
    group: Group
    setGroup: (group: Group) => void;
}

type Props = GroupCardProps & DataCardProps;

class GroupCardInternal extends React.Component<Props, GroupCardState> {

    constructor(props: Props) {
        super(props);

        this.state = {
            group: this.props.group
        };
    }

    setGroupName = (name: string) => {
        this.setState({ group: this.props.group.set("name", name) });
    }

    updateGroup = () => {
        this.props.setGroup(this.state.group);
    }

    render(): JSX.Element {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="string"
                                value={this.state.group.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setGroupName(e.currentTarget.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={this.updateGroup}>
                                OK
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export const GroupCard = makeDataCard()(GroupCardInternal);
