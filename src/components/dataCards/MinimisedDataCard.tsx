import * as React from "react";

import { actions } from "../../api";

interface MinimisedCardState {
}

interface MinimisedCardProps {
    label: string;
}

type Props = MinimisedCardProps;

export class MinimisedDataCard extends React.Component<Props, MinimisedCardState> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    render(): JSX.Element {
        return (
            <div>
                {this.props.label}
            </div>
        );
    }
}