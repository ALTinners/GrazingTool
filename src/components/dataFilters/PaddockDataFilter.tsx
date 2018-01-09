import * as React from "react";

import {
    Paddock,
    PaddockFilterState
} from "../../api";

interface PaddockDataFilterProps {
    filter: PaddockFilterState;
    setFilter: (filter: PaddockFilterState) => void;
}

export class PaddockDataFilter extends React.Component<PaddockDataFilterProps, {}> {

    constructor(props: PaddockDataFilterProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element | null {
        return (
            <div className="filter-bar">
                <span>Name</span>
                <input
                    type="text"
                    value={this.props.filter.name}
                    onChange={
                        (e) => {
                            this.props.setFilter({
                                ...this.props.filter,
                                name: e.currentTarget.value
                            })
                        }
                    }
                />
            </div>
        );
    }
}