import * as React from "react";

import HeaderNavButton from "./HeaderNavButton";
import UserDetails from "./UserDetails";

import "./App.scss";

interface SidebarProps {
    addTransaction: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Sidebar extends React.Component<SidebarProps, {}> {

    constructor(props: SidebarProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        return (
            <div className="sidebar">
                <button onClick={this.props.addTransaction}>
                    Transaction
                </button>
            </div>
        );
    }
}