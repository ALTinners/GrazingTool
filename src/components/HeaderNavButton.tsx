import * as React from "react";

import "./App.scss";

interface HeaderNavButtonProps {
    label: string
    onClick: (e : React.MouseEvent<HTMLButtonElement>) => void
}

export default class HeaderNavButton extends React.Component<HeaderNavButtonProps, {}> {

    constructor(props: HeaderNavButtonProps) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <button className="header-nav-button" onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}