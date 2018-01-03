import * as React from "react";

import "./App.scss";

interface UserDetailsProps {
    username: string
}

export default class UserDetails extends React.Component<UserDetailsProps, {}> {

    constructor(props: UserDetailsProps) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="user-details-container">
                {this.props.username}
            </div>
        );
    }
}