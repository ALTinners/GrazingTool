import * as React from "react";

import { makeDataCard, DataCardProps } from "./DataCard";
import { Group } from "../../api";

interface GroupCardProps {
    group: Group
}

type Props = GroupCardProps & DataCardProps;

class GroupCardInternal extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="string"
                                value={this.props.group.name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>
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
